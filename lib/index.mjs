import {
  FunctionBind,
  Map,
  MapGet,
  MapHas,
  MapSet,
  MapDelete,
  ObjectPropertyIsEnumerable,
  ReflectOwnKeys,
  String,
  TypeError,
  WeakMap,
  WeakMapPrototypeGet,
  WeakMapPrototypeSet
} from '@dwlib/primordials';
import IsObject from '@dwlib/abstract/IsObject';
import ToPropertyKey from '@dwlib/abstract/ToPropertyKey';

const SLOTS = new WeakMap();

const GetSlots = FunctionBind(WeakMapPrototypeGet, SLOTS);
const SetSlots = FunctionBind(WeakMapPrototypeSet, SLOTS);

const RequireTargetObject = argument => {
  if (!IsObject(argument)) {
    throw new TypeError('`target` is not an object');
  }
}

export const DefineSlots = (target, slots) => {
  RequireTargetObject(target);
  let map = GetSlots(target);
  if (!map) {
    map = new Map();
    SetSlots(target, map);
  }
  if (slots != null) {
    if (!IsObject(slots)) {
      throw new TypeError('`slots` is not an object');
    }
    const keys = ReflectOwnKeys(slots);
    const length = keys.length;
    for (let i = 0; i < length; i++) {
      const key = keys[i];
      if (ObjectPropertyIsEnumerable(slots, key)) {
        const value = slots[key];
        MapSet(map, key, value);
      }
    }
  }
}

export const GetSlot = (target, key) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  const slots = GetSlots(target);
  return slots ? MapGet(slots, slot) : undefined;
}

export const SetSlot = (target, key, value) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  let slots = GetSlots(target);
  if (!slots) {
    slots = new Map();
    SetSlots(target, slots);
  }
  MapSet(slots, slot, value);
}

export const HasSlot = (target, key) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  const slots = GetSlots(target);
  return slots ? MapHas(slots, slot) : false;
}

export const DeleteSlot = (target, key) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  const slots = GetSlots(target);
  return slots ? MapDelete(slots, slot) : false;
}

export const RequireSlot = (target, key) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  const slots = GetSlots(target);
  if (!slots || !MapHas(slots, slot)) {
    throw new TypeError(`Internal slot '${String(slot)}' is not defined`);
  }
}

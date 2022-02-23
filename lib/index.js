'use strict';

const {
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
} = require('@dwlib/primordials');
const IsObject = require('@dwlib/abstract/IsObject');
const ToPropertyKey = require('@dwlib/abstract/ToPropertyKey');

const SLOTS = new WeakMap();

const GetSlots = FunctionBind(WeakMapPrototypeGet, SLOTS);
const SetSlots = FunctionBind(WeakMapPrototypeSet, SLOTS);

const RequireTargetObject = argument => {
  if (!IsObject(argument)) {
    throw new TypeError('`target` is not an object');
  }
}

const DefineSlots = (target, slots) => {
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
exports.DefineSlots = DefineSlots;

const GetSlot = (target, key) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  const slots = GetSlots(target);
  return slots ? MapGet(slots, slot) : undefined;
}
exports.GetSlot = GetSlot;

const SetSlot = (target, key, value) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  let slots = GetSlots(target);
  if (!slots) {
    slots = new Map();
    SetSlots(target, slots);
  }
  MapSet(slots, slot, value);
}
exports.SetSlot = SetSlot;

const HasSlot = (target, key) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  const slots = GetSlots(target);
  return slots ? MapHas(slots, slot) : false;
}
exports.HasSlot = HasSlot;

const DeleteSlot = (target, key) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  const slots = GetSlots(target);
  return slots ? MapDelete(slots, slot) : false;
}
exports.DeleteSlot = DeleteSlot;

const RequireSlot = (target, key) => {
  RequireTargetObject(target);
  const slot = ToPropertyKey(key);
  const slots = GetSlots(target);
  if (!slots || !MapHas(slots, slot)) {
    throw new TypeError(`Internal slot '${String(slot)}' is not defined`);
  }
}
exports.RequireSlot = RequireSlot;

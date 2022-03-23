import MapSet from '#primordials/MapSet';
import Object from '#primordials/Object';
import ObjectPropertyIsEnumerable from '#primordials/ObjectPropertyIsEnumerable';
import ReflectOwnKeys from '#primordials/ReflectOwnKeys';
import RequireTargetObject from '#abstract/RequireTargetObject';
import GetInternalSlotsOrCreateIfUndefined from '#internal/GetInternalSlotsOrCreateIfUndefined';

const assign = (target, ...sources) => {
  RequireTargetObject(target);
  const internalSlots = GetInternalSlotsOrCreateIfUndefined(target);
  const numberOfSources = sources.length;
  for (let i = 0; i < numberOfSources; i++) {
    const source = sources[i];
    if (source != null) {
      const object = Object(source);
      const keys = ReflectOwnKeys(object);
      const numberOfKeys = keys.length;
      for (let j = 0; j < numberOfKeys; j++) {
        const key = keys[j];
        if (ObjectPropertyIsEnumerable(object, key)) {
          const value = object[key];
          MapSet(internalSlots, key, value);
        }
      }
    }
  }
  return target;
}

export default assign;

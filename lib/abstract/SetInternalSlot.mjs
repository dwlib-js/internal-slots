import MapSet from '#primordials/MapSet';
import ToPropertyKey from '#abstract/ToPropertyKey';
import GetInternalSlotsOrCreateIfUndefined from '#internal/GetInternalSlotsOrCreateIfUndefined';

const SetInternalSlot = (target, internalSlot, value) => {
  const key = ToPropertyKey(internalSlot);
  const internalSlots = GetInternalSlotsOrCreateIfUndefined(target);
  MapSet(internalSlots, key, value);
}

export default SetInternalSlot;

'use strict';

const MapSet = require('#primordials/MapSet');
const ToPropertyKey = require('#abstract/ToPropertyKey');
const GetInternalSlotsOrCreateIfUndefined = require('#internal/GetInternalSlotsOrCreateIfUndefined');

const SetInternalSlot = (target, internalSlot, value) => {
  const key = ToPropertyKey(internalSlot);
  const internalSlots = GetInternalSlotsOrCreateIfUndefined(target);
  MapSet(internalSlots, key, value);
}

module.exports = SetInternalSlot;

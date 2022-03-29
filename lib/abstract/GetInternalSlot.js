'use strict';

const MapGet = require('#primordials/MapGet');
const {
  GetInternalSlots
} = require('#internal');

const GetInternalSlot = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  return internalSlots ? MapGet(internalSlots, internalSlot) : undefined;
}

module.exports = GetInternalSlot;

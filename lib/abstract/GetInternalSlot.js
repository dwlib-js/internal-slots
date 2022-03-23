'use strict';

const MapGet = require('#primordials/MapGet');
const $ = require('#internal');

const GetInternalSlots = $.GetInternalSlots;

const GetInternalSlot = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  return internalSlots ? MapGet(internalSlots, internalSlot) : undefined;
}

module.exports = GetInternalSlot;

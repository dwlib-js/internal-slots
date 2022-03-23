'use strict';

const MapHas = require('#primordials/MapHas');
const $ = require('#internal');

const GetInternalSlots = $.GetInternalSlots;

const HasInternalSlot = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  return internalSlots ? MapHas(internalSlots, internalSlot) : false;
}

module.exports = HasInternalSlot;

'use strict';

const MapHas = require('#primordials/MapHas');
const {
  GetInternalSlots
} = require('#internal');

const HasInternalSlot = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  return internalSlots ? MapHas(internalSlots, internalSlot) : false;
}

module.exports = HasInternalSlot;

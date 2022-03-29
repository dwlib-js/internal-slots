'use strict';

const MapDelete = require('#primordials/MapDelete');
const {
  GetInternalSlots
} = require('#internal');

const DeleteInternalSlot = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  return internalSlots ? MapDelete(internalSlots, internalSlot) : false;
}

module.exports = DeleteInternalSlot;

'use strict';

const MapDelete = require('#primordials/MapDelete');
const $ = require('#internal');

const GetInternalSlots = $.GetInternalSlots;

const DeleteInternalSlot = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  return internalSlots ? MapDelete(internalSlots, internalSlot) : false;
}

module.exports = DeleteInternalSlot;

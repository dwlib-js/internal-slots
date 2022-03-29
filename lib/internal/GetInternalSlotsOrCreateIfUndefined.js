'use strict';

const Map = require('#primordials/Map');
const {
  GetInternalSlots,
  SetInternalSlots
} = require('./');

const GetInternalSlotsOrCreateIfUndefined = target => {
  let internalSlots = GetInternalSlots(target);
  if (!internalSlots) {
    internalSlots = new Map();
    SetInternalSlots(target, internalSlots);
  }
  return internalSlots;
}

module.exports = GetInternalSlotsOrCreateIfUndefined;

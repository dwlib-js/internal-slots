'use strict';

const Map = require('#primordials/Map');
const $ = require('./');

const GetInternalSlots = $.GetInternalSlots;
const SetInternalSlots = $.SetInternalSlots;

const GetInternalSlotsOrCreateIfUndefined = target => {
  let internalSlots = GetInternalSlots(target);
  if (!internalSlots) {
    internalSlots = new Map();
    SetInternalSlots(target, internalSlots);
  }
  return internalSlots;
}

module.exports = GetInternalSlotsOrCreateIfUndefined;

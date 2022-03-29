'use strict';

const MapGet = require('#primordials/MapGet');
const MapHas = require('#primordials/MapHas');
const {
  GetInternalSlots
} = require('#internal');
const ThrowInternalSlotNotDefinedError = require('./ThrowInternalSlotNotDefinedError');

const GetInternalSlotOrThrow = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  if (!internalSlots) {
    ThrowInternalSlotNotDefinedError(internalSlot);
  }
  const value = MapGet(internalSlots, internalSlot);
  if (value === undefined && !MapHas(internalSlots, internalSlot)) {
    ThrowInternalSlotNotDefinedError(internalSlot);
  }
  return value;
}

module.exports = GetInternalSlotOrThrow;

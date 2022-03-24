'use strict';

const HasInternalSlot = require('./HasInternalSlot');
const ThrowInternalSlotNotDefinedError = require('./ThrowInternalSlotNotDefinedError');

const RequireInternalSlot = (target, internalSlot) => {
  if (!HasInternalSlot(target, internalSlot)) {
    ThrowInternalSlotNotDefinedError(internalSlot);
  }
}

module.exports = RequireInternalSlot;

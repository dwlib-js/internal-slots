'use strict';

const String = require('#primordials/String');
const TypeError = require('#primordials/TypeError');

const ThrowInternalSlotNotDefinedError = internalSlot => {
  const name = String(internalSlot);
  throw new TypeError(`Internal slot '${name}' is not defined`);
}

module.exports = ThrowInternalSlotNotDefinedError;

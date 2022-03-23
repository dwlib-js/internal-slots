'use strict';

const String = require('#primordials/String');
const TypeError = require('#primordials/TypeError');
const HasInternalSlot = require('./HasInternalSlot');

const RequireInternalSlot = (target, internalSlot) => {
  if (!HasInternalSlot(target, internalSlot)) {
    const key = String(internalSlot);
    throw new TypeError(`Internal slot '${key}' is not defined`);
  }
}

module.exports = RequireInternalSlot;

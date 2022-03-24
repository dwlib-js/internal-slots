'use strict';

const RequireTargetObject = require('#abstract/RequireTargetObject');
const ToPropertyKey = require('#abstract/ToPropertyKey');
const GetInternalSlot = require('#abstract-functions/GetInternalSlot');
const GetInternalSlotOrThrow = require('#abstract-functions/GetInternalSlotOrThrow');

const get = (target, internalSlot, require) => {
  RequireTargetObject(target);
  const key = ToPropertyKey(internalSlot);
  return require ? GetInternalSlotOrThrow(target, key) : GetInternalSlot(target, key);
}

module.exports = get;

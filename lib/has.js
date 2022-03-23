'use strict';

const RequireTargetObject = require('#abstract/RequireTargetObject');
const ToPropertyKey = require('#abstract/ToPropertyKey');
const HasInternalSlot = require('#abstract-functions/HasInternalSlot');

const has = (target, internalSlot) => {
  RequireTargetObject(target);
  const key = ToPropertyKey(internalSlot);
  return HasInternalSlot(target, key);
}

module.exports = has;

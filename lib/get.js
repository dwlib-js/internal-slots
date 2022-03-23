'use strict';

const RequireTargetObject = require('#abstract/RequireTargetObject');
const ToPropertyKey = require('#abstract/ToPropertyKey');
const GetInternalSlot = require('#abstract-functions/GetInternalSlot');

const get = (target, internalSlot) => {
  RequireTargetObject(target);
  const key = ToPropertyKey(internalSlot);
  return GetInternalSlot(target, key);
}

module.exports = get;

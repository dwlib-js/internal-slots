'use strict';

const RequireTargetObject = require('#abstract/RequireTargetObject');
const SetInternalSlot = require('#abstract-functions/SetInternalSlot');

const set = (target, internalSlot, value) => {
  RequireTargetObject(target);
  return SetInternalSlot(target, internalSlot, value);
}

module.exports = set;

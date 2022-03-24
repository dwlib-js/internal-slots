'use strict';

const DeleteInternalSlot = require('./DeleteInternalSlot');
const GetInternalSlot = require('./GetInternalSlot');
const GetInternalSlotOrThrow = require('./GetInternalSlotOrThrow');
const HasInternalSlot = require('./HasInternalSlot');
const RequireInternalSlot = require('./RequireInternalSlot');
const SetInternalSlot = require('./SetInternalSlot');
const ThrowInternalSlotNotDefinedError = require('./ThrowInternalSlotNotDefinedError');

module.exports = {
  DeleteInternalSlot,
  GetInternalSlot,
  GetInternalSlotOrThrow,
  HasInternalSlot,
  RequireInternalSlot,
  SetInternalSlot,
  ThrowInternalSlotNotDefinedError
};

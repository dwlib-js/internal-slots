'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const WeakMap = require('#primordials/WeakMap');

const WeakMapPrototypeGet = GetIntrinsicOrThrow('WeakMap.prototype.get');
const WeakMapPrototypeSet = GetIntrinsicOrThrow('WeakMap.prototype.set');

const INTERNAL_SLOTS = new WeakMap();

const GetInternalSlots = FunctionBind(WeakMapPrototypeGet, INTERNAL_SLOTS);
const SetInternalSlots = FunctionBind(WeakMapPrototypeSet, INTERNAL_SLOTS);

module.exports = {
  GetInternalSlots,
  SetInternalSlots
};

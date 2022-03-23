import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import WeakMap from '#primordials/WeakMap';

const WeakMapPrototypeGet = GetIntrinsicOrThrow('WeakMap.prototype.get');
const WeakMapPrototypeSet = GetIntrinsicOrThrow('WeakMap.prototype.set');

const INTERNAL_SLOTS = new WeakMap();

const GetInternalSlots = FunctionBind(WeakMapPrototypeGet, INTERNAL_SLOTS);
const SetInternalSlots = FunctionBind(WeakMapPrototypeSet, INTERNAL_SLOTS);

export {
  GetInternalSlots,
  SetInternalSlots
};

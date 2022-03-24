import MapGet from '#primordials/MapGet';
import MapHas from '#primordials/MapHas';
import {
  GetInternalSlots
} from '#internal';
import ThrowInternalSlotNotDefinedError from './ThrowInternalSlotNotDefinedError.mjs';

const GetInternalSlotOrThrow = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  if (!internalSlots) {
    ThrowInternalSlotNotDefinedError(internalSlot);
  }
  const value = MapGet(internalSlots, internalSlot);
  if (value === undefined && !MapHas(internalSlots, internalSlot)) {
    ThrowInternalSlotNotDefinedError(internalSlot);
  }
  return value;
}

export default GetInternalSlotOrThrow;

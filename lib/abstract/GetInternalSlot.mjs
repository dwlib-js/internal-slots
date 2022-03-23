import MapGet from '#primordials/MapGet';
import {
  GetInternalSlots
} from '#internal';

const GetInternalSlot = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  return internalSlots ? MapGet(internalSlots, internalSlot) : undefined;
}

export default GetInternalSlot;

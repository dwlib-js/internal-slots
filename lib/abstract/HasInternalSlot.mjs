import MapHas from '#primordials/MapHas';
import {
  GetInternalSlots
} from '#internal';

const HasInternalSlot = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  return internalSlots ? MapHas(internalSlots, internalSlot) : false;
}

export default HasInternalSlot;

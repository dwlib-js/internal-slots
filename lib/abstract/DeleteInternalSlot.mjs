import MapDelete from '#primordials/MapDelete';
import {
  GetInternalSlots
} from '#internal';

const DeleteInternalSlot = (target, internalSlot) => {
  const internalSlots = GetInternalSlots(target);
  return internalSlots ? MapDelete(internalSlots, internalSlot) : false;
}

export default DeleteInternalSlot;

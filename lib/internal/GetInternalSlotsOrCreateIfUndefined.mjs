import Map from '#primordials/Map';
import {
  GetInternalSlots,
  SetInternalSlots
} from './index.mjs';

const GetInternalSlotsOrCreateIfUndefined = target => {
  let internalSlots = GetInternalSlots(target);
  if (!internalSlots) {
    internalSlots = new Map();
    SetInternalSlots(target, internalSlots);
  }
  return internalSlots;
}

export default GetInternalSlotsOrCreateIfUndefined;

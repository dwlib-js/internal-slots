import String from '#primordials/String';
import TypeError from '#primordials/TypeError';
import HasInternalSlot from './HasInternalSlot.mjs';

const RequireInternalSlot = (target, internalSlot) => {
  if (!HasInternalSlot(target, internalSlot)) {
    const key = String(internalSlot);
    throw new TypeError(`Internal slot '${key}' is not defined`);
  }
}

export default RequireInternalSlot;

import HasInternalSlot from './HasInternalSlot.mjs';
import ThrowInternalSlotNotDefinedError from './ThrowInternalSlotNotDefinedError.mjs';

const RequireInternalSlot = (target, internalSlot) => {
  if (!HasInternalSlot(target, internalSlot)) {
    ThrowInternalSlotNotDefinedError(internalSlot);
  }
}

export default RequireInternalSlot;

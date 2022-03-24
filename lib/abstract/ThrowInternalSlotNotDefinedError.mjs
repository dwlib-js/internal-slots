import String from '#primordials/String';
import TypeError from '#primordials/TypeError';

const ThrowInternalSlotNotDefinedError = internalSlot => {
  const name = String(internalSlot);
  throw new TypeError(`Internal slot '${name}' is not defined`);
}

export default ThrowInternalSlotNotDefinedError;

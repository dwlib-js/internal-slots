import RequireTargetObject from '#abstract/RequireTargetObject';
import SetInternalSlot from '#abstract-functions/SetInternalSlot';

const set = (target, internalSlot, value) => {
  RequireTargetObject(target);
  return SetInternalSlot(target, internalSlot, value);
}

export default set;

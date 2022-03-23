import RequireTargetObject from '#abstract/RequireTargetObject';
import ToPropertyKey from '#abstract/ToPropertyKey';
import HasInternalSlot from '#abstract-functions/HasInternalSlot';

const has = (target, internalSlot) => {
  RequireTargetObject(target);
  const key = ToPropertyKey(internalSlot);
  return HasInternalSlot(target, key);
}

export default has;

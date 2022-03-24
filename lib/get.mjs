import RequireTargetObject from '#abstract/RequireTargetObject';
import ToPropertyKey from '#abstract/ToPropertyKey';
import GetInternalSlot from '#abstract-functions/GetInternalSlot';
import GetInternalSlotOrThrow from '#abstract-functions/GetInternalSlotOrThrow';

const get = (target, internalSlot, require) => {
  RequireTargetObject(target);
  const key = ToPropertyKey(internalSlot);
  return require ? GetInternalSlotOrThrow(target, key) : GetInternalSlot(target, key);
}

export default get;

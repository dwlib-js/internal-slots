import RequireTargetObject from '#abstract/RequireTargetObject';
import ToPropertyKey from '#abstract/ToPropertyKey';
import GetInternalSlot from '#abstract-functions/GetInternalSlot';

const get = (target, internalSlot) => {
  RequireTargetObject(target);
  const key = ToPropertyKey(internalSlot);
  return GetInternalSlot(target, key);
}

export default get;

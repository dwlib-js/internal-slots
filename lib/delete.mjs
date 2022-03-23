import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import RequireTargetObject from '#abstract/RequireTargetObject';
import ToPropertyKey from '#abstract/ToPropertyKey';
import DeleteInternalSlot from '#abstract-functions/DeleteInternalSlot';

const $delete = (target, internalSlot) => {
  RequireTargetObject(target);
  const key = ToPropertyKey(internalSlot);
  return DeleteInternalSlot(target, key);
}
ReflectDefineProperty($delete, 'name', {
  value: 'delete'
});

export default $delete;

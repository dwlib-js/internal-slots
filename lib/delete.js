'use strict';

const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const RequireTargetObject = require('#abstract/RequireTargetObject');
const ToPropertyKey = require('#abstract/ToPropertyKey');
const DeleteInternalSlot = require('#abstract-functions/DeleteInternalSlot');

const $delete = (target, internalSlot) => {
  RequireTargetObject(target);
  const key = ToPropertyKey(internalSlot);
  return DeleteInternalSlot(target, key);
}
ReflectDefineProperty($delete, 'name', {
  value: 'delete'
});

module.exports = $delete;

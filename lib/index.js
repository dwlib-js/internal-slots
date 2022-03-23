'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const InternalSlotsAssign = require('./assign');
const InternalSlotsDelete = require('./delete');
const InternalSlotsGet = require('./get');
const InternalSlotsHas = require('./has');
const InternalSlotsSet = require('./set');

const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

const InternalSlots = ObjectCreate(ObjectPrototype, {
  assign: {
    value: InternalSlotsAssign
  },
  delete: {
    value: InternalSlotsDelete
  },
  get: {
    value: InternalSlotsGet
  },
  has: {
    value: InternalSlotsHas
  },
  set: {
    value: InternalSlotsSet
  }
});
ReflectDefineProperty(InternalSlots, SymbolToStringTag, {
  value: 'InternalSlots'
});

module.exports = InternalSlots;

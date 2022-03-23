import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import InternalSlotsAssign from './assign.mjs';
import InternalSlotsDelete from './delete.mjs';
import InternalSlotsGet from './get.mjs';
import InternalSlotsHas from './has.mjs';
import InternalSlotsSet from './set.mjs';

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

export default InternalSlots;

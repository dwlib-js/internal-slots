# Internal Slots

## Install
`npm i --save @dwlib/internal-slots`

## Usage
```javascript
/** Module */
// CJS
const InternalSlots = require('@dwlib/internal-slots');
const InternalSlotsAssign = require('@dwlib/internal-slots/assign');
const InternalSlotsDelete = require('@dwlib/internal-slots/delete');
const InternalSlotsGet = require('@dwlib/internal-slots/get');
const InternalSlotsHas = require('@dwlib/internal-slots/has');
const InternalSlotsSet = require('@dwlib/internal-slots/set');
const DeleteInternalSlot = require('@dwlib/internal-slots/abstract/DeleteInternalSlot');
const GetInternalSlot = require('@dwlib/internal-slots/abstract/GetInternalSlot');
const GetInternalSlotOrThrow = require('@dwlib/internal-slots/abstract/GetInternalSlotOrThrow');
const HasInternalSlot = require('@dwlib/internal-slots/abstract/HasInternalSlot');
const RequireInternalSlot = require('@dwlib/internal-slots/abstract/RequireInternalSlot');
const SetInternalSlot = require('@dwlib/internal-slots/abstract/SetInternalSlot');
// ESM
import InternalSlots from '@dwlib/internal-slots';
import InternalSlotsAssign from '@dwlib/internal-slots/assign';
import InternalSlotsDelete from '@dwlib/internal-slots/delete';
import InternalSlotsGet from '@dwlib/internal-slots/get';
import InternalSlotsHas from '@dwlib/internal-slots/has';
import InternalSlotsSet from '@dwlib/internal-slots/set';
import DeleteInternalSlot from '@dwlib/internal-slots/abstract/DeleteInternalSlot';
import GetInternalSlot from '@dwlib/internal-slots/abstract/GetInternalSlot';
import GetInternalSlotOrThrow from '@dwlib/internal-slots/abstract/GetInternalSlotOrThrow';
import HasInternalSlot from '@dwlib/internal-slots/abstract/HasInternalSlot';
import RequireInternalSlot from '@dwlib/internal-slots/abstract/RequireInternalSlot';
import SetInternalSlot from '@dwlib/internal-slots/abstract/SetInternalSlot';

const target = {};
InternalSlots.assign(target, {
  text: 'Ave, Darkwolf!'
});
InternalSlots.get(target, 'text'); // => 'Ave, Darkwolf!'
InternalSlots.get(target, 'key'); // => undefined
InternalSlots.get(target, 'key', true); // throws TypeError
InternalSlots.set(target, 'test', true);
InternalSlots.has(target, 'test'); // => true
InternalSlots.delete(target, 'test'); // => true
```

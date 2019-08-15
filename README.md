<a
  href="https://travis-ci.org/Xotic750/object-freeze-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/object-freeze-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/object-freeze-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/object-freeze-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/object-freeze-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/object-freeze-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/object-freeze-x"
  title="npm version">
<img src="https://badge.fury.io/js/object-freeze-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/object-freeze-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/object-freeze-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/object-freeze-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/object-freeze-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/object-freeze-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/object-freeze-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_object-freeze-x"></a>

## object-freeze-x

Freezes an object. Or fake when freeze does not exist.

<a name="exp_module_object-freeze-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

Nothing can be added to or removed from the properties set of a frozen object. Any attempt to do so will fail,
either silently or by throwing a TypeError exception (most commonly, but not exclusively, when in strict mode).

For data properties of a frozen object, values cannot be changed, the writable and configurable attributes are
set to false. Accessor properties (getters and setters) work the same (and still give the illusion that you are
changing the value). Note that values that are objects can still be modified, unless they are also frozen.
As an object, an array can be frozen; after doing so, its elements cannot be altered and no elements can be
added to or removed from the array.

Returns the same object that was passed into the function. It does not create a frozen copy.

**Kind**: Exported member  
**Returns**: <code>\*</code> - The object to freeze.

| Param    | Type            | Description           |
| -------- | --------------- | --------------------- |
| [target] | <code>\*</code> | The object to freeze. |

**Example**

```js
import freeze from 'object-freeze-x';

const x = {};
console.log(freeze(x) === x); // true
```

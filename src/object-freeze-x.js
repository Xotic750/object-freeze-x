import isPimitive from 'is-primitive-x';
import isTypedArray from 'is-typed-array';

const nativeFreeze = {}.constructor.freeze;

const assertTypedArray = function assertTypedArray(obj) {
  if (isTypedArray(obj) && obj.byteLength !== 0) {
    throw new TypeError('Cannot freeze array buffer views with elements');
  }

  return obj;
};

export const patchedFreeze = function freeze(obj) {
  return isPimitive(obj) ? obj : nativeFreeze(assertTypedArray(obj));
};

// fake
export const implementation = function freeze(obj) {
  return assertTypedArray(obj);
};

/**
 * This method method freezes an object. A frozen object can no longer be changed; freezing an
 * object prevents new properties from being added to it, existing properties from being removed,
 * prevents changing the enumerability, configurability, or writability of existing properties,
 * and prevents the values of existing properties from being changed. In addition, freezing an
 * object also prevents its prototype from being changed. It returns the same object that
 * was passed in.
 *
 * @param {*} obj - The object to freeze.
 * @returns {*} The object that was passed to the function..
 */
const freeze = typeof nativeFreeze === 'function' ? patchedFreeze : implementation;

export default freeze;

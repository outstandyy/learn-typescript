/**
 * Type
 */
function identity<Type>(arg: Type): Type {
  return arg;
}

const output: string = identity<string>('MyString');


/**
 * Generic Types
 */
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentity: GenericIdentityFn = identity;


/**
 * Generic Classes
 */
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

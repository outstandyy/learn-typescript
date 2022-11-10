/**
 * A type guard is a TypeScript technique used to get information about the type of `a` variable, usually within a conditional block.
 * Type guards are regular functions that return a boolean,
 * taking a type and telling TypeScript if it can be narrowed down to something more specific.
 * Type guards have the unique property of assuring that the value tested is of a set type depending on the returned boolean.
 *
 * Types of type guards:
 *  1. `instanceof`
 *  2. `typeof`
 *  3. `in`
 *  4. `===`
 *  5. custom type guard
 */


/**
 * `instanceof` - check if a value is an instance of a given constructor function or class
 */

class Foo {
  foo: number = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

function doStuff1(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // OK
    // console.log(arg.bar); // Error!
  }
  if (arg instanceof Bar) {
    // console.log(arg.foo); // Error!
    console.log(arg.bar); // OK
  }

  console.log(arg.common); // OK
  // console.log(arg.foo); // Error!
  // console.log(arg.bar); // Error!
}

doStuff(new Foo());
doStuff(new Bar());


/**
 * `in` - does a safe check for the existence of a property on an object
 */
interface A {
  x: number;
}
interface B {
  y: string;
}

function doStuff2(q: A | B) {
  if ('x' in q) {
    // q: A
  }
  else {
    // q: B
  }
}


/**
 * Custom type guard
 */
/**
 * Just some interfaces
 */
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

/**
 * User Defined Type Guard!
 */
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

/**
 * Sample usage of the User Defined Type Guard
 */
function doStuff3(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // OK
    // console.log(arg.bar); // Error!
  }
  else {
    // console.log(arg.foo); // Error!
    console.log(arg.bar); // OK
  }
}

doStuff3({ foo: 123, common: '123' });
doStuff3({ bar: 123, common: '123' });

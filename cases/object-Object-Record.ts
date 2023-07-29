/**
 * 1. object - any non-primitive type (`array`, `function`, `object`)
 *
 * 2. Object - all except `null` and `undefined`
 *
 * 3. {} - all except `null` and `undefined`
 *
 * 4. Record<string, unknown> - key: `string` and value: `object` (no arrays / functions)
 *
 */

function a() {
  return 'lol';
}

const record: Record<string, unknown> = {};
record[1] = a;
console.log(record);

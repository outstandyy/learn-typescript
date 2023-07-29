// 1. unknown - `any` analog, but we need type guards before using
// When use:
// - always instead of `any`
// - unknown api responses
// - JSON.parse results




// 2. never - union with zero elements (while(true): never / throw new Error(): never)
type Test = number | never;
// type Test = number;
// you can assign: stringVar = neverVar
// you CANNOT assign neverVar = stringVar (ERROR)




// 3. void - function doesn't return value

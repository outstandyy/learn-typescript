// Record
type Test1 = Record<string, unknown>;
// same
type Test2 = { [x: string]: unknown };

const object: Record<string, number> = {
  a: 5,
  b: 6,
}



// Pick
type TestObject = { a: number; b: string; c: boolean };
type Test1 = Pick<TestObject, 'a'>;
// type Test1 = { a: number; }




// Omit (vice versa Pick)
type TestObject = { a: number; b: string; c: boolean };
type Test1 = Omit<TestObject, 'a' | 'b'>;
// type Test1 = { c: boolean }




// Extract
type TestUnion = string | number | boolean;
type TestUnion2 = 'test1' | 'test2' | 1 | 2 | false;

type Test1 = Extract<TestUnion, string>;
// type Test1 = string
type Test2 = Extract<TestUnion2, 'test1' | 'test2'>;
// type Test1 = 'test1' | 'test2'




// Exclude (vice versa Extract)
type TestUnion = string | number | boolean;
type TestUnion2 = 'test1' | 'test2' | 1 | 2 | false;

type Test1 = Exclude<TestUnion, string>;
// type Test1 = number | boolean
type Test2 = Exclude<TestUnion2, 'test1' | 'test2'>;
// type Test1 = 1 | 2 | false



// NonNullable (Exclude for null and undefined)
type TestUnion = null | undefined | string | number | boolean;

type Test1 = NonNullable<TestUnion, string>;
// type Test1 = string | number | boolean


// Partial (make fields optional)
type Test1 = Partial<{ a: number; b: string }>;
// type Test1 = { a?: number; b?: string }
type Test2 = Partial<number[]>;
// type Test2 = (number[] | undefined)[];
type Test3 = Partial<string>;
// type Test3 = string !!!



// Partial (vice versa Partial)
type Test1 = Required<{ a?: number; b: string | undefined | null }>;
// type Test1 = { a: number; b: string | undefined | null }


type Test1 = Readonly<{ a: number; b: string; c: { e: string } }>;
// type Test1 = { readonly a: number; readonly b: string; readonly c: { e: string }}


// Parameters
type AnyFunction = (...args: any[]) => any;
type FnParams = Parameters<(a: number, b: string, c?: boolean) => void>;
// type FnParams = [a: number, b: string, c?: boolean | undefined]


// ReturnType
type FnReturn1 = ReturnType<() => number>
// type FnReturn1 = number;


// Awaited
type NumberPromise = Promise<string>;
type Test1 = Awaited<NumberPromise>;
// type Test1 = number;




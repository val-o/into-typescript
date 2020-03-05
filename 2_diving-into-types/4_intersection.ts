const a = { a: 2 };
const b = { b: 3 };
const c = { ...a, ...b };

declare function merge<TA, TB>(a: TA, b: TB): TA & TB;

const c2 = merge(a, b);
c2.a + c2.b;

export {}
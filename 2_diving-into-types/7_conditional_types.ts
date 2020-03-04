declare function convert<T extends number | string>(
  arg: T
): T extends number ? string : number;

const num = convert("string");
const str = convert(3);


/**
 * Almost never used these 2 =)
 */
type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "b" | "d"
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"

type T02 = Exclude<string | number | (() => void), Function>; // string | number
type T03 = Extract<string | number | (() => void), Function>; // () => void

export {};

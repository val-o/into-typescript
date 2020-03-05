/**
 * By using union types you can narrow down type even further
 */

const color: string = "red";

type Color = "red" | "green" | "blue";
const betterColor: Color = "red";
const betterColor2: Color = "yellow";

/**
 * Union types can be composed from any types
 */

type Predicate =
  | string
  | ((item: object) => boolean)
  | { test: (item: object) => boolean };


function test(predicate: Predicate, object: object): boolean {
  if (typeof predicate === 'string') {
    return predicate in object;
  }
  /**
   * Not that each time we assert type, typescirpt will infer rest type variations for predicate, here it will remove 'string' from union
   */
  if (typeof predicate === 'function') {
    return predicate(object);
  }

  // finally only 1 type is available.
  return predicate.test(object);
}

export {}
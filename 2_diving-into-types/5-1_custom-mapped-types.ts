/**
 * Custom mapped types
 */

type NonReadonly<T> = {
  -readonly [K in keyof T]: T[K]
}
type NonReadonlyDog = NonReadonly<Dog>;

type OnlyFunctions<T extends object> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
type OnlyFunctionsDog = OnlyFunctions<Dog>;


/**
 * From handbook
 */
type Proxy<T> = {
  get(): T;
  set(value: T): void;
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
}
interface Dog {
  name: string;
  age: number;
}
const dog = null as unknown as Dog;
declare function proxify<T>(o: T): Proxify<T>;
let proxyProps = proxify(dog);
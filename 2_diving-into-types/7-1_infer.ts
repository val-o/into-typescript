type FirstArg<TFn> = TFn extends (a: infer U, ...args: any[]) => any
  ? U
  : never;

type FirstArgumentOfFn = FirstArg<(a: string) => void>;
/**
 * Use case in exercise 2
 */

/**
 * ReturnType
 */

const mapDog = () => ({
  name: "Vasya",
  age: 10
});
type LazyDog = ReturnType<typeof mapDog>;
const dog2: LazyDog = {
  age: 3,
  name: "Petya"
};

const execute = <TFn extends (...args: any[]) => any>(
  fn: TFn
): ReturnType<TFn> => {
  throw new Error();
};
const result = execute(() => "lol");

/**
 * Parameters
 */

declare const myFn: (a: number, b: string) => void;

type MyFnParams = Parameters<typeof myFn>;

export {};

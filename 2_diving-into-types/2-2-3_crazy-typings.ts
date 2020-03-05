/**
 * https://github.com/microsoft/TypeScript/issues/12290
 */

interface PathArray<T, L> extends Array<string | number> {
  ["0"]?: keyof T;
  ["1"]?: L extends {
    ["0"]: infer K0;
  }
    ? K0 extends keyof T
      ? keyof T[K0]
      : never
    : never;
  ["2"]?: L extends {
    ["0"]: infer K0;
    ["1"]: infer K1;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? keyof T[K0][K1]
        : never
      : never
    : never;
  ["3"]?: L extends {
    ["0"]: infer K0;
    ["1"]: infer K1;
    ["2"]: infer K2;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? keyof T[K0][K1][K2]
          : never
        : never
      : never
    : never;
  ["4"]?: L extends {
    ["0"]: infer K0;
    ["1"]: infer K1;
    ["2"]: infer K2;
    ["3"]: infer K3;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? K3 extends keyof T[K0][K1][K2]
            ? keyof T[K0][K1][K2][K3]
            : never
          : never
        : never
      : never
    : never;
  ["5"]?: L extends {
    ["0"]: infer K0;
    ["1"]: infer K1;
    ["2"]: infer K2;
    ["3"]: infer K3;
    ["4"]: infer K4;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? K3 extends keyof T[K0][K1][K2]
            ? K4 extends keyof T[K0][K1][K2][K3]
              ? keyof T[K0][K1][K2][K3][K4]
              : never
            : never
          : never
        : never
      : never
    : never;
  ["6"]?: L extends {
    ["0"]: infer K0;
    ["1"]: infer K1;
    ["2"]: infer K2;
    ["3"]: infer K3;
    ["4"]: infer K4;
    ["5"]: infer K5;
  }
    ? K0 extends keyof T
      ? K1 extends keyof T[K0]
        ? K2 extends keyof T[K0][K1]
          ? K3 extends keyof T[K0][K1][K2]
            ? K4 extends keyof T[K0][K1][K2][K3]
              ? K5 extends keyof T[K0][K1][K2][K3][K4]
                ? keyof T[K0][K1][K2][K3][K4][K5]
                : never
              : never
            : never
          : never
        : never
      : never
    : never;
}

type ArrayHasIndex<MinLenght extends number> = { [K in MinLenght]: any };

export type PathArrayValue<
  T,
  L extends PathArray<T, L>
> = L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>
  ? any
  : L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4 | 5 | 6>
  ? T[L[0]][L[1]][L[2]][L[3]][L[4]][L[5]][L[6]]
  : L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4 | 5>
  ? T[L[0]][L[1]][L[2]][L[3]][L[4]][L[5]]
  : L extends ArrayHasIndex<0 | 1 | 2 | 3 | 4>
  ? T[L[0]][L[1]][L[2]][L[3]][L[4]]
  : L extends ArrayHasIndex<0 | 1 | 2 | 3>
  ? T[L[0]][L[1]][L[2]][L[3]]
  : L extends ArrayHasIndex<0 | 1 | 2>
  ? T[L[0]][L[1]][L[2]]
  : L extends ArrayHasIndex<0 | 1>
  ? T[L[0]][L[1]]
  : L extends ArrayHasIndex<0>
  ? T[L[0]]
  : never;

export type Path<T, L> = PathArray<T, L> | keyof T;

export type PathValue<T, L extends Path<T, L>> = L extends PathArray<T, L>
  ? PathArrayValue<T, L>
  : L extends keyof T
  ? T[L]
  : any;

declare function path<T, L extends Path<T, L>>(
  object: T,
  params: L
): PathValue<T, L>;

const obj = {
  v: {
    w: { x: { y: { z: { a: { b: { c: 2 } } } } } },
    ouch: true,
    foo: [{ bar: 2 }, { bar: 3 }]
  }
};

const output: number = path(obj, ["v", "w", "x"]); // 💥
const output2: object = path(obj, ["v", "w", "x"]); // ✔️
const output4: { c: string } = path(obj, ["v", "w", "x", "y", "z", "a", "b"]); // 💥
const output3: { c: number } = path(obj, ["v", "w", "x", "y", "z", "a", "b"]); // ✔️
const output5: "wrong" = path(obj, ["v", "w", "x", "y", "z", "a", "b", "c"]); // ✔️ since after 7 levels there is no typechecking

const x = path(obj, ["v", "ouch", "x"]); // 💥
const y = path(obj, ["v", "ouch", "y"]); // 💥
const z = path(obj, ["v", "ouch", "somethingCompletelyDifferent"]); // 💥

path(obj, "!"); // 💥
path(obj, ["!"]); // 💥
path(obj, ["v", "!"]); // 💥
path(obj, ["v", "w", "!"]); // 💥
path(obj, ["v", "w", "x", "!"]); // 💥
path(obj, ["v", "w", "x", "y", "!"]); // 💥
path(obj, ["v", "w", "x", "y", "z", "!"]); // 💥
path(obj, ["v", "w", "x", "y", "z", "a", "!"]); // 💥
path(obj, ["v", "w", "x", "y", "z", "a", "b", "!"]); // ✔️ since after 7 levels there is no typechecking
path(obj, "v"); // ✔️
path(obj, ["v"]); // ✔️
path(obj, ["v", "w"]); // ✔️
path(obj, ["v", "w", "x"]); // ✔️
path(obj, ["v", "w", "x", "y"]); // ✔️
path(obj, ["v", "w", "x", "y", "z"]); // ✔️
path(obj, ["v", "w", "x", "y", "z", "a"]); // ✔️
path(obj, ["v", "w", "x", "y", "z", "a", "b"]); // ✔️
path(obj, ["v", "w", "x", "y", "z", "a", "b", "c"]); // ✔️
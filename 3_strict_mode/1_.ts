export const s: PropertyDescriptor = {
  writable: false,
  get: () => "",
  set: v => {},
  value: "sdf",
  configurable: false,
  enumerable: false
};

type A = {
  configurable: boolean;
  enumerable: boolean;
  value: number;
}

type B = {
  configurable: boolean;
  enumerable: boolean;
  get: () => number;
  set: (v: number) => void;
  value?: undefined;
}

type ss = A | B;

type te = ss['value'];

const t: ss = {
  configurable: false,
  enumerable: false,
  //  value: 3,
  get: () => 3,
  set(s) {},
};
// const t: ss = {configurable: false, enumerable: false, value: 3};
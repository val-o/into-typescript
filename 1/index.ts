import { A } from "./a";

export const a = (b: number) => (c: number) => {
  return c + b;
};

const s = new A();

export const readA = (ins: A) => {
  console.log(ins);
};

const myObj = {
  a: "s"
};

function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

function LogClass(target: any) {
  console.log(target);
}

const LogProp: PropertyDecorator = (target, propertyKey) => {
  console.log(target);
  console.log(propertyKey);
}

interface ISome {
  a :string
}

// @LogClass
class Demo {
  // @LogProp
  public ss: ISome;

  // @LogMethod
  public foo(bar: number) {
    // do nothing
  }
}

const demo = new Demo();


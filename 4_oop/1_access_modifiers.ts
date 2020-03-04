abstract class Model {
  static a : string;
  constructor(public readonly id: string) {

  }


  protected convertFromString (): this {

    return new this.constructor('d');
  }
  public abstract getDisplayName(): string;
}

type s = ThisType({});

type tt = Model | HTMLAllCollection;

interface SS extends Partial<Model> {

}

type NoFunctions<TObj extends object> = { [key in (keyof TObj extends  )]: TObj[key] extends Function ? never : TObj[key]};
const s = {
  a: 3,
  b: 4,
  c(): void {}
}

type t = typeof s;
type tO = NoFunctions<t>;
const g: tO = {
 a: 5,
 b: 6,
}

class MyClass {
  public readonly id: string;
  private readonly _id: string;


  public ss() {
    this.__proto__
  }
}
({}).toString();
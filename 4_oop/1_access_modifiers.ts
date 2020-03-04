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


class MyClass {
  public readonly id: string;
  private readonly _id: string;


  public ss() {
    this.__proto__
  }
}
({}).toString();
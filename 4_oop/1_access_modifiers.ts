abstract class Model<TId extends number | string> {
  constructor(public readonly id: TId) {}

  protected toString() {
    return `Model_${this.id}`;
  }

  public abstract getDisplayName(): string;
}

class User extends Model<string> {
  constructor(public username: string, id: string) {
    super(id);
  }
  public getDisplayName() {
    return super.toString() + '_' + this.username;
  }
}


export {}
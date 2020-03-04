abstract class Model {
  constructor(public readonly id: string) {

  }

  public abstract getDisplayName(): string;
}



class User extends Model {
  constructor(
    public username: string, id: string
  ) {
    super(id);
  }
  public getDisplayName() {
    return this.username
  }
}
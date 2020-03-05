import { Inject } from "./Inject";

class AuthStore {
  public auth() {}
}

class AuthFormComponent {
  @Inject public provider!: AuthStore;

  constructor(props: object) {}

  private handleSubmit() {
    this.provider.auth();
  }
}

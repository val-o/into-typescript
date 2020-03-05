import { Inject } from "./Inject";

class AuthStore {
  public auth() {

  }
}

class AuthFormComponent {
  @Inject public provider!: AuthStore;

  private handleSubmit() {
    this.provider.auth();
  }

}
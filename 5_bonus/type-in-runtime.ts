import { Inject } from "./Inject";

class Provider {

}

class Store {
  @Inject public provider!: Provider;

}
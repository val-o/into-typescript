/**
 * Void - procedure
 */
function procedure(): void {}

/**
 * Chaining
 */
class Builder {
  public addPart(part: string): this {
    return this;
  }
  public addAnotherPart(part: string): this {
    return this;
  }
}

const builder = new Builder();
builder
  .addPart("a")
  .addPart("b")
  .addAnotherPart("c");

/**
 * Never
 */
declare function throwNoAccessError(): never;

function access() {
  throwNoAccessError();

  return 'access granted';
}

export {};

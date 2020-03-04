export function print(object: unknown): void {
  if (typeof object === "string") {
    console.log(object.toUpperCase());
    return;
  }

  if (object instanceof HTMLAnchorElement) {
    console.log(object.href);
    return;
  }

  if (Array.isArray(object)) {
    console.log(object.length);
    return;
  }

  if (typeof object === "object") {
    // doesn't infer
    // https://github.com/microsoft/TypeScript/issues/37141
    if (HTMLDivElement.prototype.isPrototypeOf(object!)) {
      return;
    }

  }

  if (typeof object === "object" && object) {
    // doesn't infer
    // if (Object.hasOwnProperty('text')) {
    //   console.log(object.text);
    // }

    console.log(Object.keys(object));
    return;
  }
}
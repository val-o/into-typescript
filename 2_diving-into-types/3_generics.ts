/**
 * Generics let user to create more abstract and reusable functions and classes, and specicialize them later in code
 */

// before generics - c#
declare class List {
  get(index: number): any;
  add(item: any): void;
}
const list = new List();
const dog: Dog = { name: "Vasya" };
list.add(dog);
const item = list.get(0);
console.log(item.nonExistingProp);

/**
 * No way to suggest type of items
 */

declare class GenericList<TItem> {
  get(index: number): TItem;
  add(item: TItem): void;
}

const listOfDogs = new GenericList<Dog>();
listOfDogs.add(dog);
const realDog = listOfDogs.get(0);
console.log(realDog.nonExistingProp);


interface Dog {
  name: string;
}

export {}
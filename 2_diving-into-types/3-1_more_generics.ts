function fetchItem<TTtem>(): Promise<TTtem> {
  return Promise.resolve((null as any) as TTtem);
}

async function printDog() {
  const dog = await fetchItem<Dog>();
  console.log(dog.name);
}

interface Dog {
  name: string;
}

/**
 * Constraints
*/

class Ovcharka implements Dog {
  name = 'Ovcharka';
  age = 3;
  sit(): void {

  }
}

/**
 * Same as in c# and java
 */

class DogHouse<TDog extends Dog> {
  constructor(private readonly _dog: TDog) {}
  getDog(): TDog {
    return this._dog;
  }
}

const ovcharkaHouse = new DogHouse(new Ovcharka());
ovcharkaHouse.getDog().sit();

/**
 * Typescript specfic generics
 */
function getValues<TObj extends object, TKey extends keyof TObj> (obj: TObj, ...keysToPrint: TKey[]): TObj[TKey][] {
  return [];
}

// Union type =(
const ovcharkaValues = getValues(ovcharkaHouse.getDog(), 'age', 'sit');


function firstArgString<Tfn extends (a: string, ...args: any[]) => any>(arg: Tfn): void {

}

firstArgString((a: string, b: number) => 'asdf');

export {};

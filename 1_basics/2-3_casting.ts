interface Dog {
  name: string;
}

const dog: Dog = {name: 'Vasya'};
const dog0: Dog = {name: 'Vasya', age: 10};
const dog1 = { name: 'Vasya', age: 10} as Dog;
const dog2 = { name: 10, age: 10} as Dog;
const dog3 = { name: 10, age: 10} as unknown as Dog;

export {}
/**
 * We can make a union type from object by examine its keys by using keyof operator
 */

 interface Dog {
   name: string;
   age: number;
   doWork(): void;
 }

 type DogKeys = keyof Dog;
 
 /**
  * We will see when this keyword is powerfull later
  */
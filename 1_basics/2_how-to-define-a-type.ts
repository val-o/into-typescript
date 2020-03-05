
/**
 * How to define a type?
 */

/**
 * Use interface for objects and functions
 */

interface ReactComponent {
  (): string;
  displayName?: string;
}

const Cmp: ReactComponent = () => "";
Cmp.displayName = "MyCmp";



/**
 * Defining a class
 * 1. creates runtime plain js class
 * 2. creates design-time type for instance shape, same as interface
 */
class Dog {
  constructor(public readonly name: string, public readonly age: number) {}
  public bark(): string {
    return "";
  }
}

const dog = new Dog("Vasya", 10);
const dog2: Dog = {
  age: 3,
  bark: () => "lol",
  name: "Petya"
};

/**
 * Use type alias for more complex structures
 * We will see other feature later.
 */

type True = true;
type Size = "small" | "big";
type Predicate = (obj: unknown) => boolean;


/**
 * Enums
 */

enum ERole {
  Admin,
  User,
  Moderator,
}

const role = ERole.Admin;
type RoleKey = keyof ERole;

type SS = {
  [TKey in keyof ERole]: string
}
type SS2 = Record<ERole, string>;

export {}
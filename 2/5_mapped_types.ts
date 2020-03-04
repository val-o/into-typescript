interface Dog {
  readonly id: string;
  name?: string;
  age: number;
  bark(): string;
  eat(): string;
}

export const dog: Dog = {
  age: 12,
  id: 'sdf',
  name: 'Sharik',
  bark() {
    return 'lol';
  },
  eat() {
    return 'lol';
  }
}

type ReadonlyDog = Readonly<Dog>;
type OptionalDog = Partial<Dog>;
type RequiredDog = Required<Dog>;


type NonReadonly<T> = {
  -readonly [K in keyof T]: T[K]
}
type NonReadonlyDog = NonReadonly<Dog>;

type OnlyFunctions<T extends object> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
type OnlyFunctionsDog = OnlyFunctions<Dog>;



enum ERole {
  User,
  Admin,
  SuperAdmin,
}
const ROLE_ICON_MAP: Record<ERole, string> = {
  [ERole.Admin]: 'admin_icon.svg',
  [ERole.SuperAdmin]: 'super_admin_icon.svg',
  [ERole.User]: 'user_icon.svg',
}
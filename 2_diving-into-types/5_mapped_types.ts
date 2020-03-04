/**
 * Mapped types is used when you need to transform existing type
 */


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

/**
 * Usefull built-ins
 */
type ReadonlyDog = Readonly<Dog>;
type OptionalDog = Partial<Dog>;
type RequiredDog = Required<Dog>;



/**
 * Use Case
 */

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



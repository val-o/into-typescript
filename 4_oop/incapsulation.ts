/**
 * Bad
 */

type CartItem = {};

declare class Cart {
  public items: CartItem[];
  public count: number;
  public addItem(item: CartItem): void;
  public removeItem(item: CartItem): void;
}

const cart = new Cart();
cart.items = [];
cart.items.push({}, {}, {});
cart.count++;

/**
 * Better
 *
 *
 *
 *
 *
 *
 *
 *
 */

declare class BetterCart {
  private _count: number;

  public readonly items: Iterable<CartItem>;
  public get count(): number;
  public addItem(item: CartItem): void;
  public removeItem(item: CartItem): void;
}

const betterCart = new BetterCart();
betterCart.items = [];
betterCart.items.push({}, {}, {});
betterCart.count++;

/**
 * DO's
 * - Use readonly members
 * - Use getters
 * - Hide implementation details by exposing narrowest interface
 *  - In the example above items could be implemented as Set, or any other data stucture other than array
 *
 *
 * User will not even need documentation to use your class
 */

export {};

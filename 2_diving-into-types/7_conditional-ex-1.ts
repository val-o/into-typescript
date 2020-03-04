type Unpacked<T> =
    T extends (infer U)[] ? U :
    T extends (...args: any[]) => infer U ? U :
    T extends Promise<infer U> ? U :
    T;

type T0 = Unpacked<string>; 
type T1 = Unpacked<string[]>; 
type T2 = Unpacked<() => string>; 
type T3 = Unpacked<Promise<string>>; 
type T4 = Unpacked<Promise<string>[]>;
type T5 = Unpacked<Unpacked<Promise<string>[]>>;
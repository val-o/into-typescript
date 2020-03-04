
declare function spy<TFn extends Function>(fn: TFn): TFn & ISpyActions<TFn>;

interface ISpyActions<TFn extends Function> {
  callCount(): number;
  calledWith: TFn extends (...args: infer U) => any ? (...args: U) => any : never;
  returned(retVal: TFn extends (...args: any[]) => infer U ? U : never): boolean;
}

function foo(a: string) {
  return a;
}
const fooSpy = spy(foo);

fooSpy('test'); // log: test
fooSpy.callCount(); // out: 1
fooSpy.calledWith('sdfdsf'); // out: true
fooSpy.calledWith('test123'); // out: false
fooSpy.returned('test'); // out: true


export const a = 1;
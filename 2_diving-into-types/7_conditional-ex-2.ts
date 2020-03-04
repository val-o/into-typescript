
/**
BTSD Challenge
  
Реализуйте функцию-шпиона spy, которая работает следующим образом:

принимает на вход любую функцию, например:

function foo(a) {
   return a;
}

const fooSpy = spy(foo);

и может следить за ее вызовами

fooSpy('test'); // log: test
fooSpy.callCount(); // out: 1
fooSpy.calledWith('test'); // out: true
fooSpy.calledWith('test123'); // out: false
fooSpy.returned('test'); // out: true
*/

declare function spy(fn: any): any;

function foo(a: string) {
  return a;
}
const fooSpy = spy(foo);

fooSpy('test'); // log: test
fooSpy.callCount(); // out: 1
fooSpy.calledWith('sdfdsf'); // out: true
fooSpy.calledWith('test123'); // out: false
fooSpy.calledWith(234); // Must not compile
fooSpy.calledWith(234, 'asdf'); // Must not compile
fooSpy.returned('test'); // out: true
fooSpy.returned(234); // Must not compile
/**
 * Easy
 */


declare function debounce(fn: any, timeoutMs: any): any;


const handleSearch = (searchQuery: string, searchCategory: string) => {
  
};
const handleSearchDebounced = debounce(handleSearch, 500);



/**
 * Intermediate
 */

 declare function useState(inital: any): any;

 const MyCmp = () => {
   const [items, setItems] = useState([]);
   return items.map();
 }


/**
 * Advanced

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
fooSpy.returned('test'); // out: true
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


const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);
// to destructure an array for no 3 we have to put  , , so its plcae shall not occupy

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]  //we can also relace elements 
})();
console.log(a);
console.log(b); 
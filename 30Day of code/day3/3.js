const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    //s = [2, 5, 7];  we cant change the array but
    s[0] = 2;  // we can assign the value to indexes
    s[1] = 5;
    s[2] = 7;

}
editInPlace();

console.log(s)
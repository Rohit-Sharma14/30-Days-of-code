const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1]; // change this line
    arr1[0] = 'potato'//...will make the copy of array 
})();
console.log(arr2);
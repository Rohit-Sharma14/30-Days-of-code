let array = [1, 2, 3];

array.push(4, 5, 6);  //will push value to last
array.pop();   //will pop the last value

array[0] = 2;  //override the value at any instance

array.forEach((array) => {
    console.log(array)       //forEach element of array
});

console.log(array);
const sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));
  //rest argument takes any no of argumment if we dont known the value of arg we will be facing then we use this
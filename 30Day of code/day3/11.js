const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {

    return function half({ max, min }) {//but we only want min and max so we destructesd it in pramas 
        return (max + min) / 2.0;
    };

})();
console.log(stats); //here we are passing stats full obj
console.log(half(stats)); 
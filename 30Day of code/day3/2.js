function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";  //const  is read only and can not be change once declared
    // const should be named in capital
    SENTENCE = str + " is amazing!"

    for (var i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

}
printManyTimes("freeCodeCamp");
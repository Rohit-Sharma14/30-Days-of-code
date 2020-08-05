function checkScope() {
    "use strict";
    let i = "function scope";  //let ka scope sirf ek block tak hi hota h jisme woh dec h uske bhr  refrence error 
    if (true) {
        let i = "block scope";    //var ka scope pure program k liye rehta h
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();
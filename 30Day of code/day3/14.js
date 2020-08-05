const bicycle = {
    gear: 2,
    setGear(newGear) {  // here we are declaring the function inside an object
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3); //here we are passingg
console.log(bicycle.gear);
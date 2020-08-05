//objects in js are made with =  {}
let me = {
    name: 'Rohit',
    surname: 'Sharma',
    add: {
        city: 'ujjain',
        state: 'MP'
    },
    age: 20,
    citys: ['ujjn', 'indore']

};

me.citys.pop();
console.log(Object.values(me));

//Object.values(objname) will give you the values of all the keys in obj
//Object.keys(objname) will give you keys
//me.hasOwnProperty('name') this will give that obj have or not this prop
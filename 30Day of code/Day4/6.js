// function add(nums) {

//     console.log(arguments);
// }

// add(4, 5, 7, 8, 12)

// //{ '0': 4, '1': 5, '2': 7, '3': 8, '4': 12 }this will give  value in form of index: value


function add(...nums) {

    console.log(nums);
}

add(4, 5, 7, 8, 12)
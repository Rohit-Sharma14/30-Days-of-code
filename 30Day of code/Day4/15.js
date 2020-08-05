// //promise
// const buyFlightTicket = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             const err = true;
//             if (err) {
//                 rej("Sorry your req is rejected")
//             }
//             else {
//                 res("Thank you your req is resolved")
//             }
//         }, 3000)
//     })
// }

// buyFlightTicket().then((success) => console.log(success)).catch((err) => console.log(err))

const userData = new Promise((resolve, reject) => {
    const error = false;

    if (error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Dylan',
            age: 32,
            email: 'DylansEmail310@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
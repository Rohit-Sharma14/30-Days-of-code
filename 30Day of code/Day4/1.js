// const player = {
//     name: ' Rohit Sharma',
//     club: 'SVVV',
//     add: {
//         city: 'Ujjain'
//     }
// };


// //now how we get objects value??
// // console.log(player.add.city);
// //but this is a  very long way of getting value thats why we use destructuring the value
// const { name, club, add: { city } } = player;
// //now every value is stored in const so we can acsess it by just calling the name of value
// console.log(`${name} lives in ${city} and has club ${club}`)



const student = {
    name: ' Rohit Sharma',
    age: '20',
    projects: {
        dicegame: 'Two player dice game using js'
    }
};


//now how we get objects value??
// console.log(player.add.city);
//but this is a  very long way of getting value thats why we use destructuring the value
const { name, age, projects: { dicegame } } = student;
//now every value is stored in const so we can acsess it by just calling the name of value
console.log(`${name} of age ${age} has bulid a  ${dicegame}`)

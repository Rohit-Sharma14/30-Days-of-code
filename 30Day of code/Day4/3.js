// function addmaker(city, state) {
//     const newadd = { city, state }
//     console.log(newadd);
// }

// addmaker('ujjain', 'mp');

//challenge
function addmakker(add) {
    const { city, state } = add
    const newadd = {
        city,
        state,
        country: 'india'
    };
    console.log(`${newadd.city}, ${newadd.state} , ${newadd.country}`)
}
addmakker({ city: 'ujjain', state: 'mp' })
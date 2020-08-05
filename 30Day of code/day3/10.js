const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [, , ...arr] = list;
    // by placing null we just remove no one and from array
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
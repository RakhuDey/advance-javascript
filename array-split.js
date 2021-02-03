const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const part = numbers.slice(2, 5);
// console.log(part);
const remove = numbers.splice(2, 4, 99);
console.log(remove);

const together = numbers.join(",");
// console.log(together);
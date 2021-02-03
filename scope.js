let bonus = 30;

function sum(first, second) {
    let result = first + second + bonus;
    console.log(result);
    return result;
}

const output = sum(3, 7);
console.log(bonus);
console.log(output);
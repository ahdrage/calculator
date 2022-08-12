function add(...nums) {
    return (nums.reduce((sum, num) => sum + num, 0))
}

function subtract(a,...nums) {
    return (a - nums.reduce((sum, num) => sum + num, 0))
}

function multiply(...nums) {
    return (nums.reduce((sum, num) => sum * num, 1))
}

function divide(...nums) {
    return ((nums.reduce((sum, num) => sum / num)))
}



console.log(`The sum of 10 + 10 + 10 = ${add(10,10,5)}` );
console.log(`The subtraction of 10 - 2 - 4 = ${subtract(10,2,4)}` );
console.log(`The multiplication of 10 * 9 * 8 = ${multiply(10,9,8)}`);
console.log(`The dividend of 100 / 2 / 2  = ${divide(100,2,2)}`);


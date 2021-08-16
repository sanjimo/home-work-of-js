function sum(numbers) {
    let value = 0;
    for (let i = 0; i < numbers.length; i++) {
        value = value + numbers[i];
    }
    return value;
}

const result = sum([12, 23, 45, 0]);
console.log("The total output is : ", result);
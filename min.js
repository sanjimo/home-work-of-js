function min(numbers) {
    let element = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < element) {
            element = numbers[i];
        }
    }
    return element;
}

const amount = [12, 5, -9, 0, 34];
const minimumAmount = min(amount);
console.log("The minimum amount is : ", minimumAmount);
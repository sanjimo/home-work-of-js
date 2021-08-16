function max(numbers) {
    let element = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > element) {
            element = numbers[i];
        }
    }
    return element;
}

const ages = [-12, -15, -27, -30, -6];
const maximumAge = max(ages);
console.log("The maximum age is : ", maximumAge);
const number = 1234567890;
console.log('Before reverse : ', number);

function reverseNumber(num) {
    let reverse = '';
    while (num > 0) {
        reverse += Math.floor(num % 10);
        num = Math.floor(num / 10);
    }
    return reverse;
}

const numberReverse = reverseNumber(number);
console.log('After reverse : ', numberReverse);
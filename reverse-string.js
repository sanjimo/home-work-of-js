const sentence = 'Life is not a bed of rose!';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}

const reverseSentence = reverseString(sentence);
console.log(reverseSentence);
//1. grade function

function findTheGrade(num) {
    if (num >= 80 && num <= 100) {
        var grade = "A+";
    }
    else if (num >= 75 && num <= 79) {
        var grade = "A";
    }
    else if (num >= 70 && num <= 74) {
        var grade = "A-";
    }
    else if (num >= 65 && num <= 69) {
        var grade = "B+";
    }
    else if (num >= 60 && num <= 64) {
        var grade = "B";
    }
    else if (num >= 55 && num <= 59) {
        var grade = "B-";
    }
    else if (num >= 50 && num <= 54) {
        var grade = "C+";
    }
    else if (num >= 45 && num <= 49) {
        var grade = "C";
    }
    else if (num >= 40 && num <= 44) {
        var grade = "C-";
    }
    else if (num >= 33 && num <= 39) {
        var grade = "D";
    }
    else {
        var grade = "Fail";
    }
    return grade;
}

let marks = 87;

let result = findTheGrade(marks);

console.log("The result is : ", result);


//2. Temperature calculation

function celsiusToFahrenheit(temperature) {
    var result = temperature * 9 / 5 + 32;
    return result;
}

function fahrenheitToCelsius(temperature) {
    var result = (temperature - 32) * 5 / 9;
    return result;
}

let currentTemperature1 = celsiusToFahrenheit(70);
console.log("The conversion of temperature from celsius to fahrenheit is : ", currentTemperature1);

let currentTemperature2 = fahrenheitToCelsius(12);
console.log("The conversion of temperature from fahrenheit to celsius is : ", currentTemperature2);



//3.odd or even

function oddOrEven(num) {
    if (num % 2 == 0) {
        return console.log("The number is Even!");
    }
    else {
        return console.log("The numbeer is Odd!");
    }

}

oddOrEven(12);
oddOrEven(99);


//4.Factorial number

function factorial(num) {
    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

let factorialResult = factorial(5);
console.log("The result of factorial is : ", factorialResult);


//5.leap year

function leapYear(year) {
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        return "true";
    }
    else if (year % 4 == 0 && year % 100 != 0) {
        return "true";
    }
    return "false";
}

let year = 2400;
let yearResult = leapYear(year);
console.log(year, " is leap year? :", yearResult);


//6.interest calculation

function findOutTheInterest(value) {
    return value * 0.1;
}

let interestResult = findOutTheInterest(500000);
console.log("The interest value is : ", interestResult);


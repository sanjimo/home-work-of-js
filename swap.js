function swap(num1, num2) {
    console.log("Before swap : ", num1, num2);
    [num1, num2] = [num2, num1];
    console.log("After swap : ", num1, num2);
}

swap(25, 3);
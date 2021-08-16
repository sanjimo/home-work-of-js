function fibonacci(num) {
    if (num == 0) {
        return [0];
    }
    if (num == 1) {
        return [0, 1];
    }
    const fibo = fibonacci(num - 1);
    fibo[num] = fibo[num - 1] + fibo[num - 2];
    return fibo;
}

const result = fibonacci(20);
console.log(result);

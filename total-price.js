const products = [
    { name: 'bag', price: 1500, quantity: 2 },
    { name: 'shoes', price: 2500, quantity: 2 },
    { name: 'watch', price: 2000, quantity: 1 }
];

let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price * product.quantity;
}

console.log('Total price is : ', totalPrice, 'BDT');
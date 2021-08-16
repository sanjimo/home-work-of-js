const phones = [
    { name: 'vivo', price: 11000 },
    { name: 'redmi', price: 20000 },
    { name: 'realme', price: 22000 },
    { name: 'blackberry', price: 40000 },
    { name: 'iPhone', price: 150000 }
];

let lowestPrice = phones[0];

for (const phone of phones) {
    if (phone.price < lowestPrice) {
        lowestPrice = phone.price;
    }
}

console.log("The lowest price of phone is : ", lowestPrice);
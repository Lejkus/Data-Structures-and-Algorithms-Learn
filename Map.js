var fruits = new Map();
fruits.set("Apple",'🍎' );
fruits.set("Mango",'🍋');
fruits.set("Grapes",'🍇' );

console.log(fruits);
console.log(fruits.keys() );
console.log(fruits.values());
console.log(fruits.entries());
console.log(fruits.has('Apple'));
console.log(fruits.get('Apple'))

//for of 
for (var [key,value] of fruits) {
    console.log(key, value); 
}

fruits.forEach((value, key, fruits) => {
    console.log(`
        Wartość: ${value}
        Klucz: ${key}
    `);
});
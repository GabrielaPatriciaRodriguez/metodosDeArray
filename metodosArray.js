//Recorriendo un array con for

const letters = ["a", "b", "c", "d"];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log("Con for", element);
}

//Recorriendo con el metodo forEach

letters.forEach(element => console.log("Con forEach", element));

const products = [{
    title: "burger",
    price: 10,
}, {
    title: "pizza",
    price: 20,
}, {
    title: "sandwich",
    price: 25,
}]

products.forEach(obj => console.log(obj.title + " $" + obj.price))

//Metodo map (transforma - es inmutable) con for:

const fruits = ["banana", "apple", "strawberry"];

const newArray = [];

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    newArray.push(element + "++");
}

console.log("original", fruits);

console.log("nuevo", newArray);

//con el metodo map

const newArray2 = fruits.map(item => item + "++");

console.log("nuevo 2", newArray2);
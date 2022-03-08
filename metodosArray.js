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

//console.log("original", fruits);

//console.log("nuevo", newArray);

//con el metodo map

const newArray2 = fruits.map(item => item + "++");

//console.log("nuevo 2", newArray2);

//El metodo map en un array de objetos

const orders = [
    {
        name: "Patricia Quiroga",
        Total: 340,
        delivered: true,
    },
    {
        name: "Lorena Samit",
        Total: 560,
        delivered: false, 
    },
    {
        name: "Maximiliano Ayit",
        Total: 1200,
        delivered: true, 
    },
    {
        name: "Maiten Rossi",
        Total: 5600,
        delivered: false, 
    }
]

//console.log("original", orders);
const totales = orders.map(item => item.Total);
//console.log("totales", totales);

//Que pasa si quiero agregar el item tax a mi nuevo array, sin modificar el array original

// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item
// });

// console.log("original", orders);
// console.log("rta2", rta2);

//Solo pasa con los objetos, no con los valores primitivos
//Estamos copiando la referencia en memoria

const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
}); //De esta forma, utilizando el script operation, no copiamos la referencia en memoria
//y el array original permanece igual

//console.log("original", orders);
//console.log("rta3", rta3);

//Filter: Filtra el array original en base a una condicion, los que la cumplan estaran
//en el nuevo array creado. Es INMUTABLE.

const words = ["pets", "cat", "dog", "sister", "flowers"];

//Filtro con for

const newWords = [];

for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 4) {
        newWords.push(element);
    }
}

console.log("array original", words);
console.log("nuevo array", newWords);

//con el metodo filter

const newWords2 = words.filter(element => element.length >= 4);
console.log("words 2", newWords2);
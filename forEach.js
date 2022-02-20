//Recorriendo un array con for

const letters = ["a", "b", "c", "d"];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log("Con for", element);
}

//Recorriendo con el metodo forEach

letters.forEach(element => console.log("Con forEach", element));
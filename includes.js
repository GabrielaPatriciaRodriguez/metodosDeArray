//METODO INCLUDES: Nos va a devolver true o false si esta el elemento en nuestro array.

//CON FOR:

let animals = ["dog", "cat", "bear", "spider"];

let includesInArray = false;

for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    if (element === "bear") {
        includesInArray = true;
        break;
    }
}

//CON INCLUDES: CUIDADO! no recibe una arraw function, recibe directamente el elemento 
//que buscamos.
//Funciona para arrays y para strings.
let rta2 = animals.includes("bear");

console.log("con for", includesInArray);
console.log("con includes", rta2);
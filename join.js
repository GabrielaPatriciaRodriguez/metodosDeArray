//METODO JOIN: nos sirve para unificar nuestro array en un string con un separador cualquiera.

const elements = ["water", "fire", "air", "land"];

//CON FOR
let rtaFinal = "";
const separator = "--";

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log("con for", rtaFinal);

//CON JOIN
let rtaFinal2 = elements.join("/");
console.log("con join", rtaFinal2);

//METODO SPLIT: divide un objeto de tipo String 
//en un array de cadenas mediante la separación de la cadena en sub-cadenas.

const title = "curso de manipulacion de arrays";

const url = title.split(" ").join("-");
console.log("mi url", url);

//Otro ejemplo muy común del método join en el ejercicio del palíndromo 
//(Básicamente una palabra que se escribe igual de derecha a izquierda y viceversa

const word = "Arepera";

const palindrome = (word) => {
  // Lo que hace dividir, voltear y luego unirlo con el join...
  return word.split("").reverse().join('').toLocaleLowerCase();
};

console.log("mi palindromo", palindrome(word));
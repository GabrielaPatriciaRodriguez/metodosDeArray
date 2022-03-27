//METODO CONCAT: Me permite concatenar un array con los elementos de otro array o con un string
//crea un nuevo array, no modifica el array original, es INMUTABLE.

const elementos =[1, 2, 3, 4];
const elementos2 =[5, 6, 7, 8];

//CON FOR
const nuevoArray = [...elementos];
for (let index = 0; index < elementos2.length; index++) {
    const element = elementos2[index];
    nuevoArray.push(element);
}

console.log("con for", nuevoArray);

//CON CONCAT
// const rta2 = elementos.concat(elementos2);
// console.log("con concat", rta2); //Hay una referencia en memoria del array elementos
//por eso me lo clona doble, la solucion seria usar el scrip operation:

const rta3 = elementos.concat(elementos2);
console.log("con concat y script operation", rta3);

//Otra forma valida de hacer una concatenacion:

const rta4 = [...elementos, ...elementos2];
console.log("con script operation", rta4);
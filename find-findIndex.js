//METODO FIND: Es parecido a filter (devuelve un array), pero no me devuelve una array, 
//me devuelve el objeto o 
//elemento en particular que cumple con la condicion, y el primero que encuentre.
//Si no lo encuentra nos devuelve UNDEFINED

//CON FOR
const numbers = [1, 23, 54, 58, 78, 96, 30];

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 96) {
       rta = element;
       break; 
    }
};

let rta2 = numbers.find(element => element === 96);

console.log("rta con for", rta);
console.log("rta2 con find", rta2);

//METODO FIND INDEX: Es igual pero me trae la posicion. Si no encuentra el elemento nos
//devuelve -1
let posicion = numbers.findIndex(element => element === 96);
console.log("finIndex", posicion);


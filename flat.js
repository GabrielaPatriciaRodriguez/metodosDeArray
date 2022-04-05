// Metodo Flat: Se trata de manipular arrays dentro de otro/s arrays, aplanar arrays

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

//Con for: podriamos anidar varios for
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[j][i];
    newArray.push(element)
    }
}

console.log("con for", newArray)

//pero que pasa si tengo array anidados

const matriz2 = [
    [1, 2, 3, [1, 8, 6]],
    [4, 5, 6, [2, 9]],
    [7, 8, 9]
]

const rta = matriz2.flat(3);

console.log("con flat", rta)
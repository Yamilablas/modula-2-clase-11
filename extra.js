let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
//             *     *     *
let [position0, , position2, ,position4] = numbers

function removeNumbers (n1, n2, n3, ...numbersToRemove) {
    return numbersToRemove.filter(function (number) {
        return number !== n1 && number !== n2 && number !== n3
    })
}
let remainingNumbers = removeNumbers(position0, position2, position4, ...numbers)

console.log(position0, position2, position4);
console.log(remainingNumbers);

let pet = {
    nombre: "Titan",
    tipo: "Perro",
    color: "Negro y dorado",
    raza: "Doberman"
}

let {
    nombre: nombreMascota,
    tipo: tipoMascota,
    color: colorMascota,
    raza: razaMascota
} = pet

console.log(`Hola les presento a mi mascota su nombre es: ${nombreMascota}, es un hermoso ${tipoMascota}, de`);
console.log(`color: ${colorMascota} y su raza es: ${razaMascota}.`);
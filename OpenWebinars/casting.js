// El CASTING  permite cambiar el tipo de una variable sin cambiar su valor
// Ejemplo

let isActive = "1"; 

console.log(typeof isActive); // <-- tipo String

isActive = Boolean(isActive);

console.log(typeof isActive); // <-- tipo Boolean
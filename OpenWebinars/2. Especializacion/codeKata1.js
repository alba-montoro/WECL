/* ARRAY
let namedCollection = ["Alba", "Manolo", "Cecilia", "David"];

console.log(namedCollection);

// Obtener el nombre de Manolo, por ejemplo
console.log(namedCollection[1]);
*/

/* SET 
let enumu = new Set([1, 7, true, "Hola"]);

// Podemos añadir nuevos elementos
enumu.add("Adiós");
console.log(enumu);
/* No podemos acceder a un valor así como array
console.log(enumu[0]);*/

// Tenemos que preguntarle si tiene...
//console.log(enumu.has(76));


/* MAP 
let mapeo = new Map([
    ["1", "Alba"],
    ["2", "Alumno"]
]);

// Añadir una clave valor nuevas
mapeo.set(1, "OpenWebinars")

// Las comillas importan
console.log(mapeo.get(1));
console.log(mapeo.get("1"));
*/

/* OBJETO */
let objeto = {
    name: "Alba",
    surname: "Montoro"
};

// Para acceder a una variable del objeto
//console.log(objeto.surname);

// Hora estádar en Europa
let currentDate = new Date();
console.log(currentDate);

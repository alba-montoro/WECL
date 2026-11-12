// FUNCIÓN NORMAL
/*
function getCopyright(name, year = 2026) {
    let copyright = name + " - " + year;
    return copyright;
}

let result = getCopyright("OpenWebinars", 2022);

console.log (result);
*/

// FUNCIÓN ANÓNIMA
/*
let funcion_anom = function(name, year = 2026) {
    let copyright = name + " - " + year;
    return copyright;
}

console.log (funcion_anom("Alba"));
*/

// CALLBACKS
/*
let funcion_anom = function(name, year, formatter ) {
    let copyright = formatter(name, year);
    return copyright;
}

let formatter = function(name, year) {
    return name + " | " + year;
}

console.log (funcion_anom("Alba", 2026, formatter));
*/


// FUNCIÓN AUTOINVOCADA
(function (name, year) {
    console.log(name, year);
})("Alba", 2026);
// Pedimos que el usuario ingrese un número
let num = prompt("Introduzca un número: ");

// Convertimos la entrada del usuario a número
let numero = Number(num);

// Creamos la función que compruebe si el resto del número entre 2 es 0
function parOimpar(numero) {
    if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = "El número " + numero + " es par";
    } else {
        document.getElementById("resultado").innerHTML = "El número " + numero + " es impar";
    }
}

// Llamamos la función
parOimpar(numero);
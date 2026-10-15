let numeros = [];

for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 101));
}

document.getElementById("solucion").innerHTML = "Estos son los 100 números aleatorios: " + numeros;

// Filtrar números entre 20 y 50
let filtrados = numeros.filter(numero => numero >= 20 && numero <= 50);

document.getElementById("solucion-filtrado").innerHTML = "Estos son los números filtrados: " + filtrados;

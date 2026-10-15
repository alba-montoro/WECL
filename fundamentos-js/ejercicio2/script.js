let numeros = [];

for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 101));
}

console.table(numeros);

// Filtrar números entre 20 y 50
let filtrados = numeros.filter(numero => numero >= 20 && numero <= 50);

console.table(filtrados);

/* --- GENERADORES --- */
function* extractNumber(attemps) {
    for (let i=0; i<attemps; i++) {
        yield Math.floor(Math.random() * 91); // número entre 1 y 90

    }
}

let cpu = 0;
let player = 0;

// Tiradas CPU
let cpuGenerator= extractNumber(2); // que genere dos números
cpu += cpuGenerator.next().value; // sumamos los dos valores
cpu += cpuGenerator.next().value;

// Tiradas player
let playerGenerator = extractNumber(2); 
player += playerGenerator.next().value; // sumamos los dos valores en la variable contadora
player += playerGenerator.next().value;

// Con un condicional ternario escribimos el mensaje que queremos
// que muestre dependiendo de quien gane.
console.log("CPU: " + cpu);
console.log("PLAYER: " + player);
console.log((cpu>player) ? "CPU WIN" : "PLAYER WIN");



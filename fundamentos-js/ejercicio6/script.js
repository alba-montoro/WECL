let valor = document.getElementById('input');
let resultado = document.getElementById('resultado');

// Con este evento hacemos que cada vez que haya un cambio en el input se refleje en la solución
// Recomendación de la IA
valor.addEventListener('input', function() {
    resultado.textContent = "El valor introducido es: " + valor.value;
});
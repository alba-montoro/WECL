// Evento click
document.querySelector(".test").addEventListener("click", function (event) {
    event.stopPropagation(); // Para que window.addEventListener funcione tenemos que evitar la propagación de este evento click
    alert("click en el boton");
});

// Evento contextmenu
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert ("menu contextual esta intervenido"); 
});

// En la interfaz window
window.addEventListener("click", function (event) {
    console.log("hemos hecho click en la ventana de la web")
});
let intupName = document.querySelector(".saluda");
let buttonSaluda = document.querySelector(".boton");

buttonSaluda.addEventListener("click", function (event) {
    if (inputName.value !== "") { // Para que cuando el input esté vacío no muestre el alert
        alert("Hola " + intupName.value);
        inputName.value = ""; // Para que luego el valor inicial esté vacío
    }

});
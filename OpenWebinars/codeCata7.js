
/*
function printName () {
    let name = "Alba";
    let surname = "Montoro";

    if (name === "Alba") {
        console.log(surname);
    }

}

printName();

*/

/* Desde un padre no se puede acceder a la información de un hijo */
let name = "Alba";

if (true) {
    let text = "Un texto cualquiera" /* <-- */
}

console.log(text); /* <-- */


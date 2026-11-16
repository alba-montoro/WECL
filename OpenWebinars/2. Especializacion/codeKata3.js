/* CONDICIONAL SWITCH */
/*
let myFruit = "lemon";

switch (myFruit) {
    case "orange":
    case "lemon":
        console.log("Citric");
        break;
    case "banana":
        console.log("Tropical");
        break;
    case "watermelon":
        console.log("Big fruit");
        break;
}
*/

/* CONDICIONAL TERNARIO */
/*
let fruit = "lemon";
let availableFruits = new Set(["lemon", "banana", "watermelon"]);

let isAvailable = (availableFruits.has(fruit)) ? "available" : "not available";

console.log(isAvailable);
*/

/* OPERADORES RELACIONALES */
let myFavoriteFruit = "orange";
let myAvailableFruits = {lemon: "Citric", watermelon: "Big Fruit", banana: "Tropical"};

/* Con IN le estoy preguntando si mi variable está en el array */
console.log(myFavoriteFruit in myAvailableFruits);

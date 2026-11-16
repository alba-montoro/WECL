/* --- BUCLE FOR --- */
/*
let enumeration = [];

for (let i = 0; i < 10; i++) {
    enumeration[i] = i +1;
}

console.log(enumeration);
*/

/* --- BUCLE DO-WHILE --- */

// Bucle infinito, porque limit será siempre menor que tres
/*
let limit = 3;

do {
    console.log(limit--);
} while(limit < 3);

console.log ("He acabado el bucle");
*/

/* --- BUCLE FOR-IN --- */
/*
let fruits = {a: "orange", b: "lemon", c:"grape"};

for (let elem in fruits) {
    // console.log(elem); // salen las claves del array asocitivo
    console.log(fruits[elem]); // salen los valores
}
*/

/* --- BUCLE FOR-OF --- */
/*
let fruits = ["orange", "lemon", "grape"];

for (let elem of fruits) {
    console.log(elem); // salen los valores
}

// Es lo mismo

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/


/* -- CONTINUE & BREAK -- */
let fruits = ["orange", "lemon", "grape"];
let myOptions = new Set(["orange", "watermelon", "banana"]);

for (let elem of fruits) {
    if(myOptions.has(elem)) {
        console.log(elem);
        break;
    }else {
        continue;
    }
}

// Declaramos el objeto persona
let persona = {
    nombre: "Laura",
    edad: 20,
    altura: 1.65,
    esEstudiante: true,
    trabajo: null,
    segundoNombre: undefined,

    aficiones: ["leer", "música", "viajar"],

    direccion: {
        ciudad: "Granada",
        pais: "España",
        codigoPostal: "18001"
    }
};

// Mostramos el objeto completo
console.log("Objeto persona:");
console.log(persona);

// Mostramos las propiedades en forma de tabla
console.log("Tabla de propiedades:");
console.table(persona);

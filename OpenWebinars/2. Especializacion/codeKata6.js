/* --- EXPRESIONES REGULARES --- */
/*

// Creamos una cadena de texto que contiene código HTML.
// Dentro del HTML hay una etiqueta <h1> con varios atributos de clase.
let html = "<html><body><h1 class=\"h1 font text\">Formacion tecnica</h1></body></html>";

// Creamos una expresión regular para localizar el contenido de una etiqueta <h1>.
// <h1       -> Busca el inicio de una etiqueta h1.
// .*        -> Permite cualquier carácter entre h1 y class.
// class="   -> Busca el atributo class.
// .*        -> Permite cualquier contenido dentro del atributo class.
// ">        -> Busca el cierre del atributo class y el carácter >.
// (?<texto>.*) -> Captura el contenido de la etiqueta h1 en un grupo llamado "texto".
// <\/h1>    -> Busca la etiqueta de cierre </h1>.
let expression = new RegExp(/<h1.*class=".*">(?<texto>.*)<\/h1>/);

// Ejecutamos la expresión regular sobre el contenido HTML.
// exec() devuelve las coincidencias encontradas y los grupos capturados.
let result = expression.exec(html);

// Mostramos por consola el contenido capturado en el grupo llamado "texto".
console.log(result.groups.texto);

*/

/* -- OTRO EJEMPLO -- */
// Creamos una expresión regular para validar números de teléfono españoles.
// Comprueba que empiecen por +34 (prefijo de España).
// Después permite un espacio opcional (\s?).
// Divide el número en tres grupos de tres dígitos cada uno ([0-9]{3}).
// También permite espacios opcionales entre los grupos.
let phone = new RegExp(/\+34\s?([0-9]{3})\s?([0-9]{3})\s?([0-9]{3})\s?/);

// Comprobamos si el número de teléfono indicado cumple el patrón.
// exec() devuelve los resultados encontrados o null si no hay coincidencia.
let isValid = phone.exec("+34 600 123 456");

// Mostramos true si el número coincide con la expresión regular
// o false si no cumple el patrón.
console.log(isValid !== null);
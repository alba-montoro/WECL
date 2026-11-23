/* Vamos a extraer información del html */

/* 1. DATOS DE ENTRADA
   Simulamos el código HTML de una página web guardado en una variable de texto. */
let inputHtml = `<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
    <p>Web de viajes</p>
    <div class="product">
        <div class="imagen">
            <img src="beach.jpg" />
        </div>
        <div class="content">
            <p class="title">vacaciones en la playa</p>
            <p class="desc">para dos personas con pension completa</p>
            <p class="price">165€ por noche/persona</p>
        </div>
    </div>
</body>
</html>`;

/* 2. CLASE EXTRACTOR (El "buscador")
   Se encarga de buscar un texto dentro del HTML usando una expresión regular (patrón). */
class Extractor {
    #value; // Propiedad privada (#): guarda el resultado y nadie desde fuera puede modificarlo.

    // Al crear el Extractor, ejecuta la búsqueda automáticamente y guarda el resultado.
    constructor(html, pattern) {
        this.#value = this.#extract(html, pattern);
    }

    // Getter: permite leer el valor guardado desde fuera usando .value (solo lectura).
    get value() {
        return this.#value;
    }

    // Método privado (#): lógica interna que aplica la expresión regular y devuelve el dato capturado.
    #extract(html, pattern) {
        let capture = pattern.exec(html);
        return capture[1]; // Devuelve solo lo que estaba entre paréntesis () en el patrón.
    }
}

/* 3. CLASE PRODUCT (El "molde" de datos)
   Representa un producto limpio y estructurado con su título e imagen. */
class Product {
    #title;
    #image;

    constructor(title, image) {
        this.#title = title;
        this.#image = image;
    }

    // Getters para poder consultar los datos del producto de forma segura.
    get title() {
        return this.#title;
    }

    get image() {
        return this.#image;
    }
}

/* 4. EJECUCIÓN Y EXTRACCIÓN
   Usamos la clase Extractor para sacar la ruta de la imagen y el título del HTML. */
let image = new Extractor(inputHtml, new RegExp(/<img src="(.*)"\s*\/>/));
let title = new Extractor(inputHtml, new RegExp(/<p class="title">(.*)<\/p>/));

/* 5. CREACIÓN DEL OBJETO FINAL
   Juntamos los datos extraídos en un objeto Product listo para usar en nuestra app. */
let product = new Product(title.value, image.value);

console.log(product);       // Muestra el objeto vacío (porque sus propiedades son privadas)
console.log(product.title); // "vacaciones en la playa" (accede a través del getter)
console.log(product.image); // "beach.jpg" (accede a través del getter)

/* Nota: Intentar leer product.#title directamente daría error de sintaxis, 
   ya que el símbolo '#' bloquea el acceso desde fuera de la propia clase Product. */
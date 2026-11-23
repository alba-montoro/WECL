/* Vamos a extraer información del html */

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

class Extractor {
    #value;

    constructor(html, pattern) {
        this.#value = this.#extract(html, pattern);
    }

    get value() {
        return this.#value;
    }

    #extract(html, pattern) {
        /* OPCIÓN 1: ponerlo en la función 
        try {
            let capture = pattern.exec(html);
            return capture[1];
        } catch (e) {
            return "- not found -";
        } */

        let capture = pattern.exec(html);
        return capture[1];
    }
}

class Product {
    #title;
    #image;

    constructor(title, image) {
        this.#title = title;
        this.#image = image;
    }

    get title() {
        return this.#title;
    }

    get image() {
        return this.#image;
    }
}

/* OPCIÓN 2: Ponerlo en las instancias */
try {
    let image = new Extractor(inputHtml, new RegExp(/<img src="(.*)"\s*\/>/));
    /* Modifico title y le añado una s para que me de error */
    let title = new Extractor(inputHtml, new RegExp(/<p class="titles">(.*)<\/p>/));
    let product = new Product(title, image);

    console.log(product.image.value);
    console.log(product.title.value);
} catch (e) {
    console.log("No se puede obtener la información completa para crear el producto")
}




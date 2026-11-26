// Selecciona el elemento del HTML que tiene la clase "request"
// y le añade un "escuchador de eventos" que detecta cuando el usuario hace clic sobre él.
document.querySelector(".request").addEventListener("click", event => {
    // Al hacer clic, se llama a la función encargada de pedir una actividad a la API.
    requestActivity();

})

// Función que realiza la petición HTTP para obtener una actividad aleatoria.
function requestActivity() {
    // Guarda en una constante la dirección (endpoint) de la API a la que se va a consultar.
    const url = "https://www.boredapi.com/api/activity/";
    // Crea una nueva instancia del objeto XMLHttpRequest, para hacer peticiones a servidores sin recargar la página.
    const http = new XMLHttpRequest();

    // Configura la petición: especifica el método HTTP ("GET" para obtener datos) y la URL de destino.
    http.open("GET", url);

    // Define una función que se ejecutará cada vez que cambie el estado de la petición (readyState).
    http.onreadystatechange = function () {
        // Comprueba dos condiciones:
        // 1. this.readyState == 4: La operación ha terminado y la respuesta está lista.
        // 2. this.status == 200: El servidor respondió con éxito (código HTTP 200 OK).
        if(this.readyState == 4 && this.status == 200) {
            // Si todo salió bien, llama a la función que mostrará los datos en pantalla, pasándole la respuesta recibida.
            insertOutputResponse(this.response);
        }
    }

    // Envía finalmente la petición configurada al servidor.
    http.send();
}

// Función que recibe la respuesta en texto plano (formato JSON) y la inserta en el HTML.
function insertOutputResponse(response) {
    // Convierte el texto en formato JSON recibido de la API en un objeto de JavaScript manipulable.
    let decodedResponse = JSON.parse(response);
    // Selecciona el elemento contenedor del HTML con la clase "activity" donde se mostrará la información.
    let container = document.querySelector(".activity");

    // Limpia todo el contenido previo del contenedor para que no se acumulen actividades anteriores.
    container.innerHTML = "";

    // Crea un nuevo elemento HTML de encabezado <h4> para el título de la actividad.
    let activity = document.createElement("h4");
    // Inserta dentro del <h4> el texto de la propiedad "activity" obtenida de la respuesta.
    activity.append(decodedResponse.activity);
    // Añade el elemento <h4> ya rellenado dentro del contenedor principal en el HTML.
    container.append(activity);

    // Crea un nuevo elemento HTML de enlace <a>.
    let link = document.createElement("a");
    // Asigna la URL de destino (href) usando la propiedad "link" de la respuesta.
    link.href = decodedResponse.link;
    // Asigna el texto visible del enlace usando la misma propiedad "link".
    link.text = decodedResponse.link;
    // Configura el enlace para que, al hacer clic, se abra en una pestaña nueva del navegador.
    link.target = "_blank";
    // Añade el enlace al contenedor principal.
    container.append(link);

    // Crea un nuevo elemento HTML de párrafo <p> para la categoría o tipo de actividad.
    let type = document.createElement("p");
    // Inserta dentro del párrafo el texto de la propiedad "type" obtenida de la respuesta.
    type.append(decodedResponse.type);
    // Añade el párrafo al contenedor principal.
    container.append(type);
}
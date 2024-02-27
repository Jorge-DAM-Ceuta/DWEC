export function iniciaListeners(){
    
}

function comprobarDatos(){
    // Obtenemos los datos del json de la url que contiene los datos.
    fetch("http://jsonplaceholder.typicode.com/posts")
    // El primer then devuelve el contenido en formato json con la función json().
    .then(respuesta => respuesta.json())

    // El segundo then recoge este objeto JSON.
    .then(datosJSON => {
        // Asignamos el objeto json que contiene los datos a datos, variable del principio para acceder a los datos mediante el índice.
        datos = datosJSON;

        // Creamos un elemento formulario con id formulario y lo añadimos al body.
        let formulario = document.createElement("form");
        formulario.setAttribute("id", "formulario");
        document.body.appendChild(formulario);

        // Mostrar el registro en el formulario con la función anterior.
        mostrarFormulario(indice);

        // Creamos dos botones dentro de un div para navegar entre los datos obtenidos del fetch. 
        // Ambos harán uso de sus respectivas funciones mediante el evento click para trabajar con el valor del índice.
        let contenedorBotones = document.createElement("div");

        let botonAnterior = document.createElement("button");
        botonAnterior.textContent = "Anterior";
        botonAnterior.addEventListener("click", mostrarAnterior);
        contenedorBotones.appendChild(botonAnterior);

        let botonSiguiente = document.createElement("button");
        botonSiguiente.textContent = "Siguiente";
        botonSiguiente.addEventListener("click", mostrarSiguiente);
        contenedorBotones.appendChild(botonSiguiente);

        document.body.appendChild(contenedorBotones);
    })

    // Si hay algun error o excepción se lanza un nuevo error.
    .catch(error => {
        throw new Error(error);
    });
}

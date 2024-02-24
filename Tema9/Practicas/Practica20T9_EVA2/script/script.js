export function crearFormulario(){
    // Variables para guardar los datos recibidos y el índice.
    let datos = [];
    let indice = 0;

    // Esta función se encarga de cargar los datos obtenidos al formulario mediante el índice.
    function mostrarFormulario(indice){
        // Obtenemos el elemento form y lo limpiamos.
        let formulario = document.getElementById("formulario");
        formulario.innerHTML = "";

        // Obtenemos el registro actual mediante el índice.
        let registroActual = datos[indice];

        // Creamos un elemento h1 para mostrar el número de registro actual mediante el índice + 1 ya que empieza en 0.
        let titulo = document.createElement("h1");
        titulo.textContent = `Registro nº ${indice + 1}`;

        // Añadimos el título al formulario.
        formulario.appendChild(titulo);

        // Recorremos cada clave del registro obtenido del array de datos.
        for(let nombre in registroActual){
            // Creamos un label con la clave.
            let label = document.createElement("label");
            label.textContent = nombre + ": ";

            // Creamos un input con el valor de dicha clave y le asignamos el valor y el atributo readonly para no poder editar su valor.
            let input = document.createElement("input");
            input.setAttribute("value", registroActual[nombre]);
            input.setAttribute("readonly", true);

            // Añadimos el input al label y el label al formulario.
            label.appendChild(input);
            formulario.appendChild(label);

            //Añadimos al formulario un elemento p para crear una separación entre cada entrada.
            let separacion = document.createElement("p");
            formulario.appendChild(separacion);
        }
    }

    // Esta función se encargará de mostrar un mensaje informativo si se llega al primer o último registro del JSON obtenido.
    function mostrarMensaje(mensaje){
        // Creamos un elemento h3 con el mensaje correspondiente.
        let info = document.createElement("h2");
        info.textContent = mensaje;
    
        // Obtenemos el formulario.
        let formulario = document.getElementById("formulario");
    
        // Insertamos el elemento con el mensaje antes del formulario.
        formulario.parentNode.insertBefore(info, formulario);
        
        // Asignamos un setTimeout para eliminar el mensaje al pasar 2 segundos.
        setTimeout(function(){
            info.remove();
        }, 2000);
    }

    // Mediante esta función comprobamos que el índice no haya llegado a 0 para hacer uso de la función anterior y cargar el registro anterior. 
    function mostrarAnterior(){
        // Si el índice no ha llegado a 0 se decrementa su valor y se llama a la función mostrarFormulario(indice);
        if(indice > 0){
            indice--;
            mostrarFormulario(indice);
        
        // Si el índice es igual a 0 se muestra un mensaje para avisar que estamos viendo el primer registro.
        }else{
            mostrarMensaje("Has llegado al primer registro.");
        }
    }

    // Mediante esta función comprobamos que el índice no supere la longitud del array de datos para hacer uso de la función anterior y cargar el registro anterior.
    function mostrarSiguiente(){
        // Si el índice no ha superado la longitud del array datos se incrementa su valor y se llama a la función mostrarFormulario(indice);
        if(indice < datos.length - 1){
            indice++;
            mostrarFormulario(indice);

        // Si el índice es igual a la longitud máxima del array datos se muestra un mensaje para avisar que estamos viendo el último registro.
        }else{
            mostrarMensaje("Has llegado al último registro.");
        }
      }

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

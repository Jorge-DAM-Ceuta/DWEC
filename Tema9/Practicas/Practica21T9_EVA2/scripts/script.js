export function iniciaListeners(){
    // Obtenemos el formulario y sus elementos.
    let formulario = document.getElementById("formulario");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let enviarButton = document.getElementById("enviar");

    //Realizamos la petición al servidor.
    peticionFetch();
    
    /*Esta función hace la petición fetch al servidor indicando el tipo de dato 
    json tanto en el cuerpo del mensaje como en la respuesta que se recibirá.*/
    function peticionFetch(){
        formulario.addEventListener("submit", function(ev){
            ev.preventDefault();

            try{
                let datosForm = new FormData(formulario);

                if(validarPassword() == true){
                    // Hacemos una petición indicando la ruta destino, el método de envío y el formato de datos que se envía y se obteiene.
                    fetch(formulario.getAttribute("action"), {
                        method: `${formulario.getAttribute("method")}`,
                        // Hacemos un JSON con los datos obtenidos del formulario para enviarlos como cuerpo de la petición.
                        body: datosForm
                    })
        
                    // Si se obtiene la respuesta correspondiente se devuelve en formato JSON con una función flecha.  
                    .then(respuesta => respuesta.json())
                    
                    // Se recogen los datos en formato JSON para usarse en la función que realizará acciones en función del rol del usuario. 
                    .then(datosJSON => {
                        accionar(datosJSON);
                    })

                    // Si se produce algún tipo de error durante la petición se muestra en consola.
                    .catch(error => {
                        console.error(error);
                    });
                }
            // Si no se produce la petición muestra un error en consola.
            }catch(error){
                console.error(error);
            }
        });
    }

    // Esta función hace una comprobación mediante una expresión regular. 
    function validarPassword(){
        let comprobacion = false;

        // Se comprueba que la contraseña tenga al menos una letra minúscula, otra mayúscula, un caracter especial y un número
        let regex = /((?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])){8,}/;

        // Si se cumple la expresión regular se setea la variable booleana a true.
        if(passwordInput.value.match(regex)){
            comprobacion = true;
        }

        // Se devuelve el resultado de la comprobación.
        return comprobacion;
    }

    // Esta función toma acción basandose en el rol del usuario obtenido del objeto JSON obtenido del servidor.
    function accionar(datosJSON){
        // Hacemos un switch con el rol del usuario obtenido para realizar una acción específica.
        switch(datosJSON.rol){
            // Si el rol del usuario es "Administrador" se oculta el formulario y se muestran 4 botones.
            case "Administrador":
                // Se oculta el formulario.
                formulario.style.display = "none";

                // Se crea un contenedor para añadir los botones.
                let contenedorBoton = document.createElement("div");

                let botonAltas = document.createElement("input");
                botonAltas.setAttribute("type", "button");
                botonAltas.value = "Altas";
                botonAltas.addEventListener("click", function(ev){
                    console.log("Ha pulsado el botón Altas");
                });

                let botonBajas = document.createElement("input");
                botonBajas.setAttribute("type", "button");
                botonBajas.value = "Bajas";
                botonBajas.addEventListener("click", function(ev){
                    console.log("Ha pulsado el botón Bajas");
                });
                
                let botonConsultas = document.createElement("input");
                botonConsultas.setAttribute("type", "button");
                botonConsultas.value = "Consultas";
                botonConsultas.addEventListener("click", function(ev){
                    console.log("Ha pulsado el botón Consultas");
                });
                
                let botonModificaciones = document.createElement("input");
                botonModificaciones.setAttribute("type", "button");
                botonModificaciones.value = "Modificaciones";
                botonModificaciones.addEventListener("click", function(ev){
                    console.log("Ha pulsado el botón Modificaciones");
                });

                // Se añaden los botones al contenedor.
                contenedorBoton.appendChild(botonAltas);
                contenedorBoton.appendChild(botonBajas);
                contenedorBoton.appendChild(botonConsultas);
                contenedorBoton.appendChild(botonModificaciones);

                // Se añade el contenedor al body.
                document.body.appendChild(contenedorBoton);
            break;

            // Si el rol del usuario es "Usuario" se añaden elementos para representar sus datos en el formulario antes del boton submit.
            case "Usuario":
                // Elementos label e input para el nombre.
                let labelNombre = document.createElement("label");
                labelNombre.textContent = "Nombre: ";
                
                let inputNombre = document.createElement("input");
                inputNombre.setAttribute("type", "text");
                inputNombre.value = datosJSON.nombre;

                let separacionP1 = document.createElement("p");

                formulario.insertBefore(labelNombre, enviarButton);
                formulario.insertBefore(inputNombre, enviarButton);
                formulario.insertBefore(separacionP1, enviarButton);

                // Elementos label e input para los apellidos.
                let labelApellidos = document.createElement("label");
                labelApellidos.textContent = "Apellidos: ";
                
                let inputApellidos = document.createElement("input");
                inputApellidos.setAttribute("type", "text");
                inputApellidos.value = datosJSON.apellidos;

                let separacionP2 = document.createElement("p");

                formulario.insertBefore(labelApellidos, enviarButton);
                formulario.insertBefore(inputApellidos, enviarButton);
                formulario.insertBefore(separacionP2, enviarButton);
                
                // Elementos label e input para el DNI.
                let labelDNI = document.createElement("label");
                labelDNI.textContent = "DNI: ";
                
                let inputDNI = document.createElement("input");
                inputDNI.setAttribute("type", "text");
                inputDNI.value = datosJSON.dni;

                let separacionP3 = document.createElement("p");

                formulario.insertBefore(labelDNI, enviarButton);
                formulario.insertBefore(inputDNI, enviarButton);
                formulario.insertBefore(separacionP3, enviarButton);

                // Elementos label, input y botón para la petición.
                let labelPeticion = document.createElement("label");
                labelPeticion.textContent = "Introduzca petición: ";

                let inputPeticion = document.createElement("input");
                inputPeticion.setAttribute("type", "text");

                let separacionP4 = document.createElement("p");

                let botonConsultar = document.createElement("input");
                botonConsultar.value = "Consultar";
                botonConsultar.setAttribute("type", "button");

                botonConsultar.classList.add("boton");
                botonConsultar.addEventListener("click", function(ev){
                    console.log(`Petición de usuario: ${inputPeticion.value}`);
                });

                formulario.insertBefore(labelPeticion, enviarButton);
                formulario.insertBefore(inputPeticion, enviarButton);
                formulario.insertBefore(separacionP4, enviarButton);
                formulario.insertBefore(botonConsultar, enviarButton);

                // "Intercambiamos" el botón que habia por el nuevo.
                enviarButton.style.display = "none";
            break;

            // Si el rol del usuario es invitado se muestra un mensaje al principio del documento y se limpia el formulario.
            case "Invitado":
                emailInput.value = "";
                passwordInput.value = "";

                let mensaje = document.createElement("h2");
                mensaje.textContent = "Usuario no reconocido";

                document.body.insertBefore(mensaje, formulario);
            break;
        }
    }
}
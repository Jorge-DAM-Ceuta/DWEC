"use strict";

/*Con esta función se inician todos los listeners para realizar funciones con elementos.*/
function iniciaListeners() {
  console.log("Todo iba perfecto... hasta que llegó el día del examen.");

  //Obtenemos los contenedores div
  let capaDatos = document.getElementById("capaDatos");
  let capaBotones = document.getElementById("capaBotones");

  //Obtenemos el elemento form, sus elementos input y sus botones.
  let formulario = document.getElementById("formulario");

  //-Inputs-
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("passwd");
  eventosInputs();

  //-Botones- Se inician sus listeners con la función eventosBotones();
  let botonEnviar = document.getElementById("submit");
  let botonReset = document.getElementById("reset");
  let botonUsuario = document.getElementById("usuario");
  eventosBotones();

  //Se desactivan los botones al inicio.
  botonEnviar.setAttribute("disabled", true);
  botonReset.setAttribute("disabled", true);

  //Obtenemos el párrafo para mostrar mensajes.
  let parrafoInfo = document.getElementById("errorP");
  
  //Evento para el formulario -> hacemos una petición con fetch al servidor.
  function eventoFormulario(){
    //Hacemos una petición fetch al servidor mediante el evento submit del formulario.
    formulario.addEventListener("submit", function(ev){ 

      fetch(formulario.getAttribute("action"), {
        method: `${formulario.getAttribute("method")}`,
        mode: "cors",
        body: JSON.stringify({
          email: emailInput.getAttribute("value"),
          passwd: passwordInput.getAttribute("value")
        })
      }) 

      //Si obtiene los datos los convierte a objeto json.
      .then(respuesta => respuesta.json())

      //Pasamos el objeto JSON.
      .then(respuestaJSON => {
        //Pasamos la responsabilidad a la siguiente función.
        comprobarUsuario(respuestaJSON);
      })

      //Si hay un error saltará en el console.error();
      .catch(error => {
        console.error("Error" + error);
      })
    });
  }

  //Eventos para los botones.
  function eventosBotones(){
    //Al pulsar el botón enviar o pulsar la tecla enter se ejecuta la petición mediante la función eventoFormulario.
    botonEnviar.addEventListener("click", eventoFormulario);
    document.addEventListener("keydown", function(ev){
      if(ev.altKey){
        eventoFormulario();
      }
    });

    //Al pulsar el botón reset se vuelve al estado principal mediante la modificación del evento click.
    botonReset.addEventListener("click", function(ev){
      emailInput.innerHTML = "";
      passwordInput.innerHTML = "";
    });

    botonUsuario.addEventListener("click", function(ev){
      let numeroUsuarios = ["usuario01@deth-klok.die", "usuario02@deth-klok.die", "usuario03@deth-klok.die"];
      
      let elementoAleatorio = Math.random()*3;
      emailInput.textContent = numeroUsuarios[elementoAleatorio];
    });
  }

  //Eventos para los inputs.
  function eventosInputs(){
    //Con el evento input comprobamos que cuando haya contenido en alguno de los dos input se activen los botones.
    emailInput.addEventListener("input", function(ev){
      ev.preventDefault();

      botonEnviar.removeAttribute("disabled");
      botonReset.removeAttribute("disabled");
      
      if(emailInput.getAttribute("value") == ""){
        botonEnviar.setAttribute("disabled", true);
        botonReset.setAttribute("disabled", true);
      }
    });

    passwordInput.addEventListener("input", function(ev){
      ev.preventDefault();

      botonEnviar.removeAttribute("disabled");
      botonReset.removeAttribute("disabled");
      
      if(passwordInput.getAttribute("value") == ""){
        botonEnviar.setAttribute("disabled", true);
        botonReset.setAttribute("disabled", true);
      }
    });

    //Al pulsar sobre cualquiera de los dos inputs se seleccionará todo el texto
    emailInput.addEventListener("focus", function(ev){
      ev.preventDefault();

      emailInput.selectionStart = 0;
      emailInput.selectionEnd = emailInput.value.length;
    });

    passwordInput.addEventListener("focus", function(ev){
      ev.preventDefault();

      passwordInput.selectionStart = 0;
      passwordInput.selectionEnd = emailInput.value.length;
    });
  }

  //Esta función recoge los datos de la petición fetch y realiza una operación en cada caso.
  function comprobarUsuario(json){
    //Si el usuario es administrador se sustituye el formulario por los tres botones.
    if(json.rol == "Administrador"){
      formulario.style.visibility = hidden;
      
      let botonGrupo = document.createElement("button");
      botonGrupo.addEventListener("click", function(ev){
        botonGrupo.classList.toggle("botonSeleccionado");
      })
  
      //Al pular el botón miembro se muestran los datos de la banda y un miembro.
      let botonMiembro = document.createElement("button");
      botonMiembro.addEventListener("click", function(ev){
        botonMiembro.classList.toggle("botonSeleccionado");
        
        let divResultado = document.getElementById("resultado");

        //Hacemos una petición al archivo .json.
        fetch("./dethklok.json")
          .then(jsonDethklok => jsonDethklok.json())

          //Obtenemos los datos en un objeto JSON.
          .then(datosJSON => {
            //Obtenemos un número aleatorio para escoger un elemento del array miembros 
            let posicionAleatoria = Math.random()*5;

            for(datos of datosJSON){
              let input = document.createElement("input");
              input.textContent = datos[0] + ": " + datos[1];

              divResultado.appendChild(input);
            }
            

            /*//Escribimos los resultados en el div.
            divResultado.textContent = "Banda: " + datosJSON.banda + 
                                       "\nMiembro número: " + posicionAleatoria 
                                       "\nNombre: " + datosJSON.banda[posicionAleatoria].nombre
                                       "\nInstrumento: " + datosJSON.banda[posicionAleatoria].instrumento
                                       "\nEdad: " + datosJSON.banda[posicionAleatoria].edad
                                       "\nNacionalidad: " + datosJSON.banda[posicionAleatoria].nacionalidad
                                       "\nFrase 1: " + datosJSON.banda[posicionAleatoria].frases[0]
                                       "\nFrase 2: " + datosJSON.banda[posicionAleatoria].frases[1]
            ;*/
          })

          .catch(error => {
            console.error("Error: " + error);
          })

      });

      let botonHome = document.createElement("button");
      botonHome.addEventListener("click", function(ev){
        botonGrupo.remove();
        botonMiembro.remove();
        botonHome.remove();
        
        formulario.style.visibility = visible;
      });

      capaDatos.appendChild(botonGrupo);
      capaDatos.appendChild(botonMiembro);
      capaDatos.appendChild(botonHome);

    //Si es usuario se muestra su información.
    }else if(json.rol == "Usuario"){
      let divResultado = document.getElementById("resultado");

      let inputEmail = document.createElement("input");
      inputEmail.textContent = json.email;

      let inputNombre = document.createElement("input");
      inputNombre.textContent = json.nombre;      

      let inputApellidos = document.createElement("input");
      inputApellidos.textContent = json.apellidos;

      let inputDNI = document.createElement("input");
      inputDNI.textContent = json.dni;

      divResultado.appendChild(inputEmail);
      divResultado.appendChild(inputNombre);
      divResultado.appendChild(inputApellidos);
      divResultado.appendChild(inputDNI);

    //Si es invitado se muestra un mensaje al principio.
    }else if(json.rol == "Invitado"){
      let mensajeInvitado = document.createElement("h2"); 
      mensajeInvitado.textContent = "No nos gustan los invitados";
      mensajeInvitado.classList.add("mensajeInquietante");

      document.body.insertBefore(formulario, mensajeInvitado);
    }
  }

  
  //Si es Usuario estandar debe aparecer nueva info abajo
  //Si es no reconocido mostrar mensaje.
}


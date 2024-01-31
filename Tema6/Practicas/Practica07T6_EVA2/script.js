//Esta función clona la fila existente y crea una nueva con el texto obtenido para añadirla a la tabla.
function agregarFila(){
    var textoInput = document.getElementById("texto");
   
    //Se comprueba que el input tenga algún contenido para realizar las operaciones.
    if(textoInput.value == ""){
        alert("Por favor, ingresa un texto antes de añadir la fila.");

    }else{
        //Obtenemos el cuerpo de la tabla y usamos cloneNode para clonar la primera fila.
        var tBody = document.getElementById("bodyTabla");
        var nuevaFila = document.getElementById("fila1").cloneNode(true);
    
        //Usamos la longitud de elementos hijo del cuerpo de la tabla y le sumamos 1 para añadir un identificador.
        nuevaFila.id = "fila" + (tBody.children.length + 1);

        //Asignamos el contenido del input a la primera celda de la nueva fila.
        nuevaFila.children[0].textContent = textoInput.value;

        //Creamos un botón en cada celda restante con el evento onclick el cual hará uso de su determinada función.
        nuevaFila.children[1].innerHTML = "<button onclick='convertirMayusculas(this)'>Mayúsculas</button>";
        nuevaFila.children[2].innerHTML = "<button onclick='aplicarFormatoChachi(this)'>Formato chachi</button>";
    
        //Se añade el elemento al cuerpo de la tabla.
        tBody.appendChild(nuevaFila);
    }
}

//A esta función se le pasa el objeto this para referenciar el elemento.
function convertirMayusculas(boton){
    //Obtenemos la fila y el texto de la primera celda.
    var fila = boton.parentNode.parentNode;
    var texto = fila.children[0];

    //Si el texto está en mayúsculas se pone minúsculas y viceversa en caso contrario.
    if(texto.textContent == texto.textContent.toUpperCase()){
        texto.textContent = texto.textContent.toLowerCase();
    }else{
        texto.textContent = texto.textContent.toUpperCase();
    }
}

//A esta función se le pasa el objeto this para referenciar el elemento.
function aplicarFormatoChachi(boton){
    //Obtenemos la fila y el texto de la primera celda.
    var fila = boton.parentNode.parentNode;
    var texto = fila.children[0];

    //Si el texto contiene la clase "formatoChachi" se elimina la clase, en caso contrario se añade.
    if(texto.classList.contains("formatoChachi")){
        texto.classList.remove("formatoChachi");
    }else{
        texto.classList.add("formatoChachi");
    }
}

//Esta función inicia el listener del botón para agregar una nueva fila.
function iniciarListener(){
    //Obtenemos el botón mediante querySelector() y le añadimos un addEventListener para el evento click.
    let botonAgregarFila = document.querySelector("button");
    botonAgregarFila.addEventListener("click", agregarFila);
}

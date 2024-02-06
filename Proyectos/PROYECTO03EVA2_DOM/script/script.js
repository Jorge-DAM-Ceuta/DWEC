//Pendiente de implementación; referencia del proyecto 1.
function generarPalabras(){
    var inputArchivo = document.getElementById("archivo");
    
    //Se obtiene el archivo seleccionado en el input.
    var archivoSeleccionado = inputArchivo.files[0];
    
    //Si el archivo se ha recogido correctamente y es distinto de null.
    if(archivoSeleccionado != null){
        //Creamos un elemento h2 para escribir el título del archivo:
        let tituloArchivo = document.createElement("h2");

        //Escribimos el título del archivo mediante la propiedad name en el elemento.
        tituloArchivo.textContent = `Título: ${archivoSeleccionado.name}`;

        //Añadimos el elemento al body:
        document.body.appendChild(tituloArchivo);

        //Declaramos un nuevo objeto FileReader para leer el archivo obtenido.
        var fileReader = new FileReader();
        
        /*Este método realiza una lectura del texto del archivo, cuando lo lee se 
        activa el evento anterior con el contenido del archivo que recibe como evt.*/
        fileReader.readAsText(archivoSeleccionado);
        
        //Este evento se activa cuando se ha cargado el contenido del archivo mediante readAsText(). 
        fileReader.onload = (evt) => {
            //Creamos un elemento p para escribir el contenido del archivo:
            let textoArchivo = document.createElement("p");

            /*Con evt se obtienen las informaciones del evento, en este caso el contenido del archivo. 
            Con las que se permite acceder al contenido del archivo mediante target.result*/
            textoArchivo.textContent = `Contenido: ${evt.target.result}`;

            //Añadimos el elemento al body:
            document.body.appendChild(textoArchivo);
        }
    }
}

function generarCSV(){

}

function generaInputsOperacion(){
    //Creamos un div con id "inputsOperacion" que contendrá los inputs number y los dos botones.
    let inputsOperacion = document.createElement("div");
    inputsOperacion.setAttribute("id", "inputsOperacion");

    //Creamos el primer texto.
    let primerParrafo = document.createElement("span");
    primerParrafo.textContent = "¿Letras x palabra?:";

    inputsOperacion.appendChild(primerParrafo);

    //Creamos el primer input number con id "letras".
    let primerInput = document.createElement("input");
    primerInput.setAttribute("type", "number");
    primerInput.setAttribute("id", "letras");

    inputsOperacion.appendChild(primerInput);

    //Creamos el segundo texto.
    let segundoParrafo = document.createElement("span");
    segundoParrafo.textContent = "¿Columnas x fila?:";

    inputsOperacion.appendChild(segundoParrafo);

    //Creamos el segundo input number con id "columnas".
    let segundoInput = document.createElement("input");
    segundoInput.setAttribute("type", "number");
    segundoInput.setAttribute("id", "columnas");

    inputsOperacion.appendChild(segundoInput);

    //Creamos el botón para generar palabras con id "generaPalabras" y el atributo disabled.
    let generarPalabras = document.createElement("button");
    generarPalabras.setAttribute("id", "generaPalabras");
    generarPalabras.disabled = true;
    generarPalabras.textContent = "Genera palabras";

    inputsOperacion.appendChild(generarPalabras);

    //Creamos el botón para generar el archivo .csv con id generaCSV y el atributo disabled.
    let generarCSV = document.createElement("button");
    generarCSV.setAttribute("id", "generaCSV");
    generarCSV.disabled = true;
    generarCSV.textContent = "Genera CSV";

    inputsOperacion.appendChild(generarCSV);

    //Añadimos el elemento contenedor al body.
    document.body.appendChild(inputsOperacion);

    return true;
}

function muestraBotonGeneraPalabras(comprobacionElementos){
    if(comprobacionElementos == true){
        var generarPalabras = document.getElementById("generaPalabras");
        let inputLetras = document.getElementById("letras");
        let inputColumnas = document.getElementById("columnas");

        function comprobarContenido(){
            let contenidoLetras = inputLetras.value;
            let contenidoColumnas = inputColumnas.value;
    
            console.log("Se esta ejecutando");

            let ambosTienenContenido = contenidoLetras != "" && contenidoColumnas.length != "";
    
            if(ambosTienenContenido == true){
                console.log("Se ha detenido el intervalo, ambos input tienen contenido.");
                clearInterval(intervalo);
                generarPalabras.disabled = false;
            }else{
                generarPalabras.disabled = true;
            }
        }

        inputLetras.addEventListener("input", comprobarContenido);
        inputColumnas.addEventListener("input", comprobarContenido);
    
        let intervalo = setInterval(comprobarContenido, 1000);
    }
}

function iniciarListeners(){
    var comprobacionCarga = false;

    let botonExaminar = document.getElementById("btnArchivo");
    botonExaminar.addEventListener("change", function(ev){
        ev.stopPropagation();
        comprobacionCarga = generaInputsOperacion();  
        muestraBotonGeneraPalabras(comprobacionCarga); 
    });
}

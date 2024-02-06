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

//Esta función inicia el primer listener: El del input file para cargar el archivo.
function iniciarPrimerListener(){
    //Variable para comprobar si se han añadido los elementos creados con generaInputsOperacion(): 
    var comprobacionCarga = false;

    //Se obtiene el botón examinar y se le añade el evento change.
    let botonExaminar = document.getElementById("btnArchivo");
    botonExaminar.addEventListener("change", function(ev){
        //Al estar dentro de un párrafo usamos stopPropagation() por lo que pueda pasar.
        ev.stopPropagation();

        //Generamos los inputs y obtnemos el valor comprobacionCarga a true.
        comprobacionCarga = generaInputsOperacion();  

        //Llamamos la función para mostrar el botón generar palabras con el valor de comprobación.
        muestraBotonGeneraPalabras(comprobacionCarga); 
    });
}

//Esta función inicia el segundo listener asociado a los input que obtienen los datos para la operación.
function muestraBotonGeneraPalabras(comprobacionCarga){
    //Si los elementos se han añadido al DOM:
    if(comprobacionCarga == true){
        //Obtenemos el botón generar palabras y los dos input.
        var generarPalabras = document.getElementById("generaPalabras");
        let inputLetras = document.getElementById("letras");
        let inputColumnas = document.getElementById("columnas");

        //Esta función servirá para ejecutarla en los eventos input de ambos input y en un setInterval().
        function comprobarContenido(){
            //Se obtiene el valor de ambos input en cada llamada.
            let contenidoLetras = inputLetras.value;
            let contenidoColumnas = inputColumnas.value;
    
            //Se comprueba que ambos input tengan contenido en la llamada al método actual.
            let ambosTienenContenido = contenidoLetras != "" && contenidoColumnas.length != "";
    
            //Si ambos tienen contenido se detiene el intervalo y se activa el botón generar palabras. En caso contrario se desactiva el botón.
            if(ambosTienenContenido == true){
                clearInterval(intervalo);
                generarPalabras.disabled = false;

                //Se añade el evento al botón generarPalabras.
                generarPalabras.addEventListener("click", function(){
                    cargarPalabras();
                });
            }else{
                generarPalabras.disabled = true;
            }
        }

        //Se usa el evento input que detecta cualquier cambio en el contenido del input.
        inputLetras.addEventListener("input", comprobarContenido);
        inputColumnas.addEventListener("input", comprobarContenido);
    
        //Usar un intervalo nos permite realizar la comprobación tantas veces como sea necesario hasta que ambos input tienen contenido.
        let intervalo = setInterval(comprobarContenido, 1000);
    }
}

//Pendiente de implementación; referencia del proyecto 1.
function cargarPalabras(){
    var inputArchivo = document.getElementById("btnArchivo");
    
    //Se obtiene el archivo seleccionado en el input.
    var archivoSeleccionado = inputArchivo.files[0];
    
    //Si el archivo se ha recogido correctamente y es distinto de null.
    if(archivoSeleccionado != null){
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

function generaInputsOperacion(){
/*Intentamos obtener los elementos que se va a crear después, en caso de que ya exista lo elimina antes de crear los 
elementos de nuevo. Esto se realiza para evitar errores por si hay un cambio de fichero durante la ejecución.*/ 
    let elementosActivos = document.getElementById("inputsOperacion");
    
    if(elementosActivos){
        elementosActivos.remove();
    }

    let tablaExistente = document.getElementById("tablaPalabras");
        
    if(tablaExistente){
        //Limpiamos la tabla anterior.
        while(tablaExistente.firstChild){
            tablaExistente.removeChild(tablaExistente.firstChild);
        }

        //Eliminamos la tabla.
        tablaExistente.remove();
    }

    //Creamos un div con id "inputsOperacion" que contendrá los inputs number y los dos botones.
    let inputsOperacion = document.createElement("div");
    inputsOperacion.setAttribute("id", "inputsOperacion");

    //Creamos el primer texto.
    let primerParrafo = document.createElement("span");
    primerParrafo.textContent = "¿Letras x palabra?:";

    inputsOperacion.appendChild(primerParrafo);

    //Creamos el primer input number con id "letras" y el atributo min para restringir numeros negativos o 0.
    let primerInput = document.createElement("input");
    primerInput.setAttribute("type", "number");
    primerInput.setAttribute("id", "letras");
    primerInput.setAttribute("min", "1");

    //Se usa el evento input que detecta cualquier cambio en el resultado del input.
    primerInput.addEventListener("input", muestraBotonGeneraPalabras);

    //Evento que impide introducir el caracter "-" para evitar números negativos.
    primerInput.addEventListener("keydown", function (ev){
        if(ev.key === "-"){
            ev.preventDefault();
        }
    });
    
    inputsOperacion.appendChild(primerInput);

    //Creamos el segundo texto.
    let segundoParrafo = document.createElement("span");
    segundoParrafo.textContent = "¿Columnas x fila?:";

    inputsOperacion.appendChild(segundoParrafo);

    //Creamos el segundo input number con id "columnas" y el atributo min para restringir numeros negativos o 0.
    let segundoInput = document.createElement("input");
    segundoInput.setAttribute("type", "number");
    segundoInput.setAttribute("id", "columnas");
    segundoInput.setAttribute("min", "1");

    //Se usa el evento input que detecta cualquier cambio en el resultado del input.
    segundoInput.addEventListener("input", muestraBotonGeneraPalabras);

    //Evento que impide introducir el caracter "-" para evitar números negativos.
    segundoInput.addEventListener("keydown", function (ev){
        if(ev.key === "-"){
            ev.preventDefault();
        }
    });

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

    generarCSV.addEventListener("click", generaCSV);

    inputsOperacion.appendChild(generarCSV);

    //Añadimos el elemento contenedor al body.
    document.body.appendChild(inputsOperacion);
}

//Esta función inicia el primer listener: El del input file para cargar el archivo.
function iniciaListeners(){
    //Se obtiene el botón examinar y se le añade el evento change.
    let botonExaminar = document.getElementById("btnArchivo");
    botonExaminar.addEventListener("change", function(ev){
        //Al estar dentro de un párrafo usamos stopPropagation() por lo que pueda pasar.
        ev.stopPropagation();

        //Generamos los inputs y obtnemos el valor comprobacionCarga a true.
        generaInputsOperacion();  

        //Llamamos la función para mostrar el botón generar palabras con el valor de comprobación.
        muestraBotonGeneraPalabras(); 
    });
}

//Esta función inicia el segundo listener asociado a los input que obtienen los datos para la operación.
function muestraBotonGeneraPalabras(){
    //Obtenemos el botón generar palabras y los dos input.
    let generarPalabras = document.getElementById("generaPalabras");
    let inputLetras = document.getElementById("letras");
    let inputColumnas = document.getElementById("columnas");

    //Esta función servirá para ejecutarla en los eventos input de ambos input y en un setInterval().
    function comprobarResultado(){
        //Se obtiene el valor de ambos input en cada llamada.
        let resultadoLetras = inputLetras.value;
        let contenidoColumnas = inputColumnas.value;

        //Se comprueba que ambos input tengan resultado en la llamada al método actual.
        let ambosTienenresultado = resultadoLetras != "" && contenidoColumnas != "";

        //Obtenemos el input que contiene el archivo.
        let ficheroCargado = document.getElementById("btnArchivo");

        //Si ambos inputs tienen un valor se realiza la siguiente comprobación. En caso contrario se sigue desactivando el botón.
        if(ambosTienenresultado == true){
            //Si se ha cargado algún fichero se detiene el intervalo y se habilita el botón. En caso contrario muestra un mensaje de alerta.
            if(ficheroCargado.files.length > 0){
                //Se detiene el intervalo.
                clearInterval(intervalo);
                
                //Se habilita el botón
                generarPalabras.disabled = false;

                //Se añade el evento al botón generarPalabras.
                generarPalabras.addEventListener("click", function(){
                    //Se usa la función cargarPalabras() que recibe el número de letras de las palabras y el número de columnas.
                    cargarPalabras(resultadoLetras, contenidoColumnas);
                });
            }else{
                //Creamos un elemento y le añadimos el mensaje.
                let advertencia = document.createElement("h3");
                advertencia.textContent = "No se ha seleccionado ningún fichero";

                //Se añade la advertencia al documento, al estar en un setInterval se añadirá una vez por segundo.
                document.body.appendChild(advertencia);

                //Eliminamos el elemento de manera que sea visible al menos uno de ellos, aunque solo pueda conseguir visualizarse intermitentemente.
                setTimeout(() => {
                    advertencia.remove();
                }, 150);
            }
        }else{
            generarPalabras.disabled = true;
        }
    }

    //Usar un intervalo nos permite realizar la comprobación tantas veces como sea necesario hasta que ambos input tienen resultado.
    let intervalo = setInterval(comprobarResultado, 1000);
}

/*Obtiene el numero de letras para obtener las palabras y el número de columnas para la tabla.
Se usa FileReader para leer y obtener las palabras del fichero, además, genera la tabla y 
habilita el botón generaCSV y le asigna su addEventListener().*/
function cargarPalabras(numeroLetras, numeroColumnas){
    //Al hacer click en cargar palabras se vuelven a generar todos los elementos de nuevo para evitar repeticiones en la tabla e interferencias varias.
    generaInputsOperacion();

    //Obtenemos el input que carga el archivo.
    var inputArchivo = document.getElementById("btnArchivo");
    
    //Se obtiene el archivo seleccionado en el input.
    var archivoSeleccionado = inputArchivo.files[0];
    
    //Si el archivo se ha recogido correctamente y es distinto de null.
    if(archivoSeleccionado != null){
        //Declaramos un nuevo objeto FileReader para leer el archivo obtenido.
        var fileReader = new FileReader();
        
        /*Este método realiza una lectura del texto del archivo, cuando lo lee se 
        activa el evento anterior con el resultado del archivo que recibe como evt.*/
        fileReader.readAsText(archivoSeleccionado);
        
        /*Este evento se activa cuando se ha cargado el resultado del archivo mediante readAsText(). 
        Obtiene las palabras y las filtra según el número de letras que haya indicado el usuario.*/
        fileReader.onload = (ev) => {
            //Obtenemos el resultado del fichero.
            let resultado = ev.target.result;

            //Este array almacenará cada palabra del fichero.
            let arrayPalabras = [];

            //Obtenemos un array en el que cada valor será una línea del fichero dividiendo el string con split() indicando el salto de línea.
            let arrayLineas = resultado.split("\n");

            //Se recorre el array de líneas del fichero.
            for(let i = 0; i < arrayLineas.length; i++){
                //Por cada línea se vuelve a dividir el string por espacios en blanco, saltos de línea y retornos de carro.
                let palabrasLinea = arrayLineas[i].split(/\s+/);

                //Obtenemos de nuevo el array sin los elementos vacíos.
                palabrasLinea = palabrasLinea.filter(palabra => palabra != "");
                
                //Concatenamos las palabras obtenidas al array de palabras. 
                arrayPalabras = arrayPalabras.concat(palabrasLinea);
            }

            //Este array obtendrá las palabras cuya longitud sea igual a la indicada por parámetros.
            let palabrasFiltradas = [];

            //Se recorre el array que contiene todas las palabras del fichero.
            for(let j = 0; j < arrayPalabras.length; j++){
                //Si la longitud de la palabra actual es igual al número de letras que queremos.
                if(arrayPalabras[j].length == numeroLetras){
                    //Añadimos la palabra al array de palabras filtradas.
                    palabrasFiltradas.push(arrayPalabras[j]);
                }
            }

            //Si el array no está vacío se genera la tabla, en caso contrario se muestra un mensaje de error y se limpia la tabla.
            if(palabrasFiltradas.length > 0){
                //Se obtiene el mensaje por id.
                let existeMensaje = document.getElementById("mensaje");

                //Si el mensaje existe se elimina ya que se va a realizar la operación.
                if(existeMensaje){
                    existeMensaje.remove();
                }

                //Obtenemos la tabla por su id.
                let tablaExistente = document.getElementById("tablaPalabras");
    
                //Si la tabla existe se elimina para mostrar solo el mensaje.
                if(tablaExistente){
                    //Limpiamos la tabla anterior.
                    while(tablaExistente.firstChild){
                        tablaExistente.removeChild(tablaExistente.firstChild);
                    }

                    //Eliminamos la tabla.
                    tablaExistente.remove();
                }

                //Se llama a la función generarTabla() que recibe el array de palabras y el número de columnas.
                generarTabla(palabrasFiltradas, numeroColumnas);
            }else{
                //Se obtiene el mensaje por id.
                let existeMensaje = document.getElementById("mensaje");

                //Si el mensaje no existe.
                if(!existeMensaje){
                    //Se crea un elemento h3 con id "mensaje", se le añade un texto y se añade al body.
                    let mensaje = document.createElement("h3");
                    mensaje.setAttribute("id", "mensaje");
                    mensaje.textContent = "No hay palabras con esa longitud en el fichero.";
                    document.body.appendChild(mensaje);

                    //Al pasar tres segundos el mensaje se eliminará.
                    setTimeout(() => {
                        mensaje.remove();
                    }, 5000);
                }
            }            
        }
    }
}

/*Esta función genera una tabla HTML con tantas columnas como se le especifica hasta terminar de añadir todas 
las palabras del array. Cuando ha terminado el proceso muestra el botón genera CSV y le aplica un evento click.*/
function generarTabla(palabras, numeroColumnas){
    //Creamos una tabla HTML y le añadimos el id "tablaPalabras".
    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tablaPalabras");

    //Creamos y añadimos un mensaje de carga.
    let mensajeCarga = document.createElement("h3");
    mensajeCarga.textContent = "Cargando datos...";
    document.body.appendChild(mensajeCarga);

    setTimeout(()=>{
        //Recorremos el array de palabras.
        for(let i = 0; i < palabras.length; i++){
            let fila = document.createElement("tr");

            //Recorremos otro array para las columnas.
            for(let j = 0; j < numeroColumnas; j++){
                //Se calcula la posición actual de la palabra correspondiente multiplicando el índice del array por las columnas sumado al número de columna que se genera actualmente.
                let indicePalabra = i * numeroColumnas + j;

                //Si aún hay palabras por insertar en la tabla: 
                if(indicePalabra < palabras.length){
                    //Se crea la columna y se asigna el valor de la posición actual.
                    let columna = document.createElement("td");
                    columna.textContent = palabras[indicePalabra];

                    //Se añade la columna a la fila.
                    fila.appendChild(columna);
                }
            }

            //Se añade la fila a la tabla.
            tabla.appendChild(fila);
        }
    

        //Agregamos la tabla al body.
        document.body.appendChild(tabla);
        
        //Eliminamos el mensaje de carga.
        mensajeCarga.remove();

        //Habilitamos el botón generar CSV.
        let generaCSV = document.getElementById("generaCSV");
        generaCSV.disabled = false;
    }, 1000);
}

function generaCSV(){
    //Obtenemos el elemento a por si se ha vuelto a llamar a la función más de una vez.
    let elementoURL = document.getElementById("urlDescarga");

    //Si el elemento existe se elimina la URL con el Blob anterior y también el elemento.
    if(elementoURL){
        URL.revokeObjectURL(elementoURL.href);
        elementoURL.remove();
    }

    //Obtenemos la tabla con los datos.
    let tabla = document.querySelector("table");

    //Almacenaremos el contenido de la tabla.
    let resultado = "";

    //Recorremos cada fila de la tabla con la propiedad rows.
    for(let i = 0; i < tabla.rows.length; i++){
        //Obtenemos la fila actual.
        let fila = tabla.rows[i];

        //Recorremos cada columna de la fila con la propiedad cells.
        for(let j = 0; j < fila.cells.length; j++){
            //Obtenemos el resultado de la columna y fila actuales.
            let contenidoColumna = fila.cells[j].textContent;

            //Agregamos el contenido de la columna al resultado.
            resultado += contenidoColumna;

            //Si no es la última columna de la fila:
            if(j < fila.cells.length - 1){
                //Se agrega una coma a la palabra obtenida.
                resultado += ",";
            }
        }

        //Añadimos un salto de línea por cada fila.
        resultado += "\n";
    }

    //Creamos un objeto Blob para almacenar el resultado. Le pasamos el string resultado y le indicamos el tipo CSV mediante la propiedad type: text/csv.
    let blob = new Blob([resultado], { type: "text/csv;charset=utf-8" });

    /*Creamos un elemento a y le añadimos al atributo href el enlace de descarga para el contenido generado por el 
    Blob mediante un objeto URL y el método createObjectURL() que recibe el Blob del fichero como parámetro.*/
    let generarFichero = document.createElement("a");
    generarFichero.setAttribute("id", "urlDescarga");
    generarFichero.setAttribute("href", URL.createObjectURL(blob));

    //Añadimos el atributo download con el nombre específico según el número de letras de las palabras obtenidas.
    generarFichero.setAttribute("download", `palabras${tabla.rows[1].cells[1].textContent.length}.csv`);

    //Añadimos el elemento al body para poder referenciarlo posteriormente.
    document.body.appendChild(generarFichero);
    
    //Se establece un segundo de retraso para que le de tiempo a establecer el nuevo href con el URL y el Blob actuales.
    setTimeout(() => {
        //Activamos la funcionalidad del elemento que hemos creado para iniciar la descarga.
        generarFichero.click();
    }, 1000);
}
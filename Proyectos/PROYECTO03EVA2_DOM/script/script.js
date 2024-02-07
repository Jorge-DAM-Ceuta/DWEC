function generaInputsOperacion(){
/*Intentamos obtener el elemento que se va a crear después, en caso de que ya exista devolverá true y terminará 
con la ejecución para evitar crear los elementos de nuevo si se carga otro documento durante la ejecución.
En caso de que no exista se crean los elementos y se añaden al body.*/
    let elementosActivos = document.getElementById("inputsOperacion");
    
    if(elementosActivos){
        return true;
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
        function comprobarResultado(){
            //Se obtiene el valor de ambos input en cada llamada.
            let resultadoLetras = inputLetras.value;
            let contenidoColumnas = inputColumnas.value;
    
            //Se comprueba que ambos input tengan resultado en la llamada al método actual.
            let ambosTienenresultado = resultadoLetras != "" && contenidoColumnas.length != "";
    
            //Si ambos tienen resultado se detiene el intervalo y se activa el botón generar palabras. En caso contrario se desactiva el botón.
            if(ambosTienenresultado == true){
                clearInterval(intervalo);
                generarPalabras.disabled = false;

                //Se añade el evento al botón generarPalabras.
                generarPalabras.addEventListener("click", function(){
                    //Se usa la función cargarPalabras() que recibe el número de letras de las palabras y el número de columnas.
                    cargarPalabras(resultadoLetras, contenidoColumnas);
                });
            }else{
                generarPalabras.disabled = true;
            }
        }

        //Se usa el evento input que detecta cualquier cambio en el resultado del input.
        inputLetras.addEventListener("input", comprobarResultado);
        inputColumnas.addEventListener("input", comprobarResultado);
    
        //Usar un intervalo nos permite realizar la comprobación tantas veces como sea necesario hasta que ambos input tienen resultado.
        let intervalo = setInterval(comprobarResultado, 1000);
    }
}

/*Obtiene el numero de letras para obtener las palabras y el número de columnas para la tabla.
Se usa FileReader para leer y obtener las palabras del fichero, además, genera la tabla y 
habilita el botón generaCSV y le asigna su addEventListener().*/
function cargarPalabras(numeroLetras, numeroColumnas){
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

                    //Obtenemos la tabla por su id.
                    let tablaExistente = document.getElementById("tablaPalabras");
    
                    //Si la tabla existe se elimina para mostrar solo el mensaje.
                    if(tablaExistente){
                        tablaExistente.remove();
                    }
                }
            }            
        }
    }
}

/*Esta función genera una tabla HTML con tantas columnas como se le especifica hasta terminar de añadir todas 
las palabras del array. Cuando ha terminado el proceso muestra el botón genera CSV y le aplica un evento click.*/
function generarTabla(palabras, numeroColumnas){
/*Obtenemos la tabla por su id y en caso de que la tabla ya exista la eliminamos antes de añadir la nueva.
Esto se hace por si se cambia de fichero durante la ejecución del script*/
    let tablaExistente = document.getElementById("tablaPalabras");
    
    if(tablaExistente){
        tablaExistente.remove();
    }

    //Creamos una tabla HTML y le añadimos el id "tablaPalabras".
    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tablaPalabras");

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

    //Habilitamos el botón generar CSV.
    let generaCSV = document.getElementById("generaCSV");
    generaCSV.disabled = false;

    //Asignamos el evento click al botón generar CSV.
    generaCSV.addEventListener("click", function(){
        generarCSV(palabras[0].length);
    });
}

function generarCSV(numeroLetras){
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

    let url = new URL();
    url.createObjectURL(blob);
    
    generarFichero.setAttribute("href", url);

    //Añadimos el atributo download con el nombre específico según el número de palabras obtenidas.
    generarFichero.setAttribute("download", `palabras${numeroLetras}.csv`);

    //Activamos la funcionalidad del elemento que hemos creado para iniciar la descarga.
    generarFichero.click();

    generarFichero.remove();
    blob.remove();
}
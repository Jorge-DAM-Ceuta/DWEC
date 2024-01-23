function mostrarArchivo(ev){
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

function iniciarListener(){
    //Se obtiene el elemento input.
    let inputArchivo = document.getElementById("archivo");

    /*Se usa addEventListener que usa el evento change para detectar una alteración del valor
    del elemento y el método mostrarArchivo() que recoge el archivo y escribe dos elementos 
    con su título y contenido mediante files y FileReader respectivamente*/
    inputArchivo.addEventListener("change", mostrarArchivo);
}
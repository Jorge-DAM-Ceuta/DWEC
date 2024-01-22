function mostrarArchivo(ev){
    var inputArchivo = document.getElementById("archivo");
    var tituloArchivo = document.getElementById("tituloArchivo");
    var textoArchivo = document.getElementById("textoArchivo");
    
    var archivoSeleccionado = inputArchivo.files[0];

    tituloArchivo.textContent = `Título: ${archivoSeleccionado.name}`;

    //Declaramos un nuevo objeto FileReader para leer el archivo obtenido.
    var fileReader = new FileReader();

    fileReader.onload = (evt) => {
        textoArchivo.textContent = `Contenido: <br/>${evt.target.result}`;
    }

    fileReader.readAsText(archivoSeleccionado);
}
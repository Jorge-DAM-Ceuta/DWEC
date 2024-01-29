function crearBoton(){
    //Obtenemos el primer elemento del body 
    let firstElement = document.body.firstChild;

    //Creamos un elemento button y se le asignan el atributo id y value.
    let boton = document.createElement("input");
    boton.setAttribute("type", "button")
    boton.setAttribute("id", "boton");
    boton.setAttribute("value", "Genera fichero HTML");

    //Inserta el botón antes del primer elemento del body.
    document.body.insertBefore(boton, firstElement);
}

function guardarFichero(){
//Primera parte: Crear elementos y objetos Blob y URL:

    //Obtenemos el elemento raíz <html> del documento HTML.
    let elementoRaiz = document.documentElement;

    //Obtiene todos los nodos del elemento raíz. 
    let elementosDocumento = elementoRaiz.outerHTML;

    //Creamos un Blob a partir de las etiquetas del documento.
    let blob = new Blob([elementosDocumento], { type: "text/html" });

    //Creamos un objeto URL a partir del Blob que contiene el documento.
    let url = URL.createObjectURL(blob);

    //Creamos el elemento <a> que redirigirá al URL para descargar el documento.
    let enlaceDescarga = document.createElement("a");
    
    //Asignamos el atributo href con la URL creada con los elementos del documento actual.
    enlaceDescarga.setAttribute("href", url);

    //Asignamos el atributo download y le damos el nombre que obtendrá el nuevo documento.
    enlaceDescarga.setAttribute("download", "miPagina.html");
    
//Segunda parte: Activar la funcionalidad asignada al elemento <a> y liberar espacio en memoria.

    //Activamos la funcionalidad del elemento que hemos creado.
    enlaceDescarga.click();

    //Con la función estática del objeto URL se libera espacio en memoria tanto de la URL como del Blob.
    URL.revokeObjectURL(url);
}

function iniciarListener(){
    //Se obtiene el elemento input creado dinámicamente en el método crearBoton().
    let inputArchivo = document.getElementById("boton");

    /*Se usa el evento click en el botón y se usa la función guardarFichero() que crea
    y acciona el elemento <a> y redirige a la URL creada con el BLOB que contiene 
    los elementos del documento para descargar un fichero con los valores.*/
    inputArchivo.addEventListener("click", guardarFichero);
}
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
    //Obtenemos el elemento raíz <html> del documento HTML.
    let elementoRaiz = document.documentElement;

    //Obtiene todos los nodos del elemento raíz. 
    let elementosDocumento = elementoRaiz.outerHTML;

    let blob = new Blob([elementosDocumento], { type: "text/html" });

    let url = URL.createObjectURL(blob);

    console.log("BLOB: " + blob.text().toString());
    console.log("URL" + url);
}

function iniciarListener(){
    //Se obtiene el elemento input.
    let inputArchivo = document.getElementById("boton");

    /*Se usa addEventListener que usa el evento change para detectar una alteración del valor
    del elemento y el método guardarFichero() que recoge el archivo y escribe dos elementos 
    con su título y contenido mediante files y FileReader respectivamente*/
    inputArchivo.addEventListener("click", guardarFichero);
}
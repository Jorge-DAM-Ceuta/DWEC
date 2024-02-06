function cargarArchivo(){
    
}

function generarPalabras(){

}

function generarCSV(){

}

function iniciarListeners(){
    let botonExaminar = document.getElementById("btnArchivo");
    botonExaminar.addEventListener("change", function(ev){
        ev.stopPropagation();

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
        generarPalabras.setAttribute("disabled", true);
        generarPalabras.textContent = "Genera palabras";

        inputsOperacion.appendChild(generarPalabras);

        //Creamos el botón para generar el archivo .csv con id generaCSV y el atributo disabled.
        let generarCSV = document.createElement("button");
        generarCSV.setAttribute("id", "generaCSV");
        generarCSV.setAttribute("disabled", true);
        generarCSV.textContent = "Genera CSV";

        inputsOperacion.appendChild(generarCSV);

        //Añadimos el elemento contenedor al body.
        document.body.appendChild(inputsOperacion);
    });
    
}

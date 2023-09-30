
//Esta función crea una tabla a partir de un número de columnas y de filas específico.
function tableSize(){
    let numeroColumnas;
    let numeroFilas;

    /*Mediante un prompt que pide al usuario un número de columnas se asigna 
    el valor a la variable numeroColumnas De la misma manera se realiza una petición
    para el número de filas que tendrá la tabla.
    */
    alert("En esta web se te permite asignar el tamaño para genera una tabla.");
    numeroColumnas = prompt("Introduce el número de columnas.");
    numeroFilas = prompt("Introduce el número de filas.");

    /*A partir de este punto se comienza a crear la tabla mediante el 
    método document.write() a partir de los valores que el usuario ha introducido.

    Para escribir el número de columnas se usa el primer bucle for, este se repetirá 
    tantas veces como indique la variable numeroColumnas. Dentro de este se encuentra
    otro bucle for para que en cada columna se creen las filas correspondientes mediante 
    la variable numeroFilas. Finalmente, fuera del bucle debe cerrarse la etiqueta <table>.  
    */
    document.write("<table>");

    for(let i = 1; i<=numeroColumnas; i++){
        document.write("<td>");
        for(let j = 1; j<=numeroFilas; j++){
            document.write("<tr>" + "C" + j + "F" + i + "</tr>");
        }
        document.write("</td>");
    }

    document.write("</table>");
}

/*Aquí se produce la llamada al método, para que una vez el script se cargue
en el fichero HTML se produzcan los cambios.*/
tableSize();
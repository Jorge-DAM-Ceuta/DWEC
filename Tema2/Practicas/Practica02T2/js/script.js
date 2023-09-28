function tableSize(){
    let numeroColumnas;
    let numeroFilas;

    alert("En esta web se te permite asignar el tamaño para genera una tabla.");
    numeroColumnas = prompt("Introduce el número de columnas.");
    numeroFilas = prompt("Introduce el número de fileas.");

    document.write("<table>");

    for(let i = 1; i<=numeroColumnas; i++){
        document.write("<tr>");
        for(let j = 1; j<=numeroFilas; j++){
            document.write("<td>" + "C" + j + "F" + i + "</td>");
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

tableSize();
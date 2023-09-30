function tableSize(){
    let numeroColumnas;
    let numeroFilas;

    alert("En esta web se te permite asignar el tamaño para genera una tabla.");
    numeroColumnas = prompt("Introduce el número de columnas.");
    numeroFilas = prompt("Introduce el número de fileas.");

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

tableSize();
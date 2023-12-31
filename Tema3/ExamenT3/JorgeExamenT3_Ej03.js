function cogeArray(cadena){

    var array = cadena.split(" ");
    return array;

}

function muestraArray(array){
    var numeroPalabras = array.length;
    var primeraPalabra = array[0];
    var ultimaPalabra = array[array.length - 1];
    var fraseRevertida = array.reverse().toString();
    var fraseOrdenadaAZ = array.sort((a, b) => a.localeCompare(b)); 
    var fraseOrdenadaZA = fraseOrdenadaAZ.reverse();

    document.write(`<p>Número de palabras: ${numeroPalabras}</p>`);
    document.write(`<p>Primera palabra: ${primeraPalabra}</p>`);
    document.write(`<p>Última palabra: ${ultimaPalabra}</p>`);
    document.write(`<p>Frase al revés: ${fraseRevertida}</p>`);
    document.write(`<p>Frase ordenada alfabeticamente: ${fraseOrdenadaAZ.toString()}</p>`);
    document.write(`<p>Frase ordenada orden inverso: ${fraseOrdenadaZA.toString()}</p>`);

}

muestraArray(cogeArray("Hola como estas, Arriba España"));
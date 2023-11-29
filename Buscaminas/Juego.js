var numeroFilas = prompt("Introduce el número de filas para el tablero: ");
var numeroColumnas = prompt("Introduce el número de columnas para el tablero: ");
var numeroMinas = prompt("Introduce un número de minas a colocar: ");

//DEBEMOS MOSTRAR EL TABLERO CON LAS PIEZAS SOLAMENTE.

//Dibuja el tablero en el documento HTML
function dibujaTablero(tablero, nFilas, nColumnas){
    //
    nFilas = tableroSize;
    nColumnas = tableroSize;
}

//Coloca un número de minas en el tablero
function colocaMinas(tablero, nMinas){

}

//Coloca espacios en blanco en el tablero
function colocaEspacios(tablero){

}

//Coloca números en el tablero
function colocarNumeros(tablero){

}

//Contar minas adyacentes a una posición específica.
function getNumMinasPos(tablero, fila, columna){

}

//Para la lógica usar onClick
//preventDefault() para anular el comportamiento por defecto de un elemento y reset() para restaurarlo. 

function Buscaminas(tableroSize, numeroMinas){
    this.tableroSize = tableroSize;
    this.numeroMinas = numeroMinas;

    this.getDimensiones = function(){
        return tableroSize;
    }

    this.getNumMinas = function(){
        return numeroMinas;
    }
}
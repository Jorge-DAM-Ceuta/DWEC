
//Coloca un número de minas en el tablero
function colocaMinas(tablero, numMinas){

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


function Buscaminas(){
    this.tablero = [];
    this.numFilas = 0;
    this.numColumnas = 0;
    this.numMinas = 0;

    //Setters
    this.setNumFilas = function(numFilas){
        this.numFilas = numFilas;
    }

    this.setNumColumnas = function(numColumnas){
        this.numColumnas = numColumnas;
    }

    this.setNumMinas = function(numMinas){
        this.numMinas = numMinas;
    }

    //Getters
    this.getNumFilas = function(){
        return numFilas;
    }

    this.getNumColumnas = function(){
        return numColumnas;
    }

    this.getNumMinas = function(){
        return numeroMinas;
    }

    //Funciones
    this.dibujaTablero = function (){
        
    }
    
}

var numeroFilas = prompt("Introduce el número de filas para el tablero: ");
var numeroColumnas = prompt("Introduce el número de columnas para el tablero: ");
var numeroMinas = prompt("Introduce un número de minas a colocar: ");

var partida = new Buscaminas(numeroFilas, numeroColumnas, numeroMinas);
partida.setNumFilas(numeroFilas);
partida.setNumColumnas(numeroColumnas);
partida.setNumMinas(numeroMinas);

//Para la lógica usar onClick
//preventDefault() para anular el comportamiento por defecto de un elemento y reset() para restaurarlo. 

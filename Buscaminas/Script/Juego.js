function Buscaminas(){
//Atributos de la clase
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
        return this.numFilas;
    }

    this.getNumColumnas = function(){
        return this.numColumnas;
    }

    this.getNumMinas = function(){
        return this.numMinas;
    }

//Funciones
    //Imprimir tablero en el documento
    this.dibujarTablero = function(){
        let tableroBuscaminas = "<table border='1'>";

        for (let i = 0; i < this.getNumFilas(); i++) {
            tableroBuscaminas += "<tr>";

            for (let j = 0; j < this.getNumColumnas(); j++) {
                //Determinamos un color según el valor obtenido en la posición actual.
                let valor = this.tablero[i][j];
                let color = "";

                if(valor != " " && valor != "*"){
                    if (valor == "1") {
                        color = "rgb(135, 206, 250)";
                    }else if (valor == "2") {
                        color = "rgb(0, 128, 0)";
                    }else if (valor == "3") {
                        color = "rgb(255, 0, 0)";
                    }else if (valor == "4") {
                        color = "rgb(0, 0, 139)";
                    }else if (valor == "5") {
                        color = "rgb(255, 165, 0)";
                    }else if (valor == "6") {
                        color = "rgb(0, 100, 0)";
                    }else if (valor == "7") {
                        color = "rgb(139, 0, 0)";
                    }else if (valor == "8") {
                        color = "rgb(128, 0, 128)";
                    }
                }

                tableroBuscaminas += `<td class='casilla' style='color: ${color};'>${valor}</td>`;
            }
            
            tableroBuscaminas += "</tr>";
        }

        tableroBuscaminas += "</table>";
        document.write(tableroBuscaminas);
    }

    //Rellenar con espacios en blanco el tablero.
    this.rellenarTablero = function(){
        for(let i = 0; i < this.getNumFilas(); i++){
            var fila = [];
            
            for(let j = 0; j < this.getNumColumnas(); j++){
                fila.push(" ");
            }

            this.tablero.push(fila);
        }
    }

    //Colocar tantas minas como numMinas aleatoriamente en el tablero.
    this.colocarMinas = function(){
        let minasColocadas = 0;

        while(minasColocadas < this.getNumMinas()){
            let fila = parseInt(Math.random() * this.getNumFilas());
            let columna = parseInt(Math.random() * this.getNumColumnas());

            if(this.tablero[fila][columna] != "*"){
                this.tablero[fila][columna] = "*";
                minasColocadas++;
            }
        }
    }

    //Contar minas adyacentes a una posición específica.
    this.getNumMinasPos = function(fila, columna){
        let contador = 0;

        for(let i = fila - 1; i <= fila + 1; i++){
            for(let j = columna - 1; j <= columna + 1; j++){
                if(i >= 0 && i < this.getNumFilas() && j >= 0 && j < this.getNumColumnas()){
                    if(this.tablero[i][j] == "*"){
                        contador++;
                    }
                }   
            }
        }

        return contador;
    }

    //Coloca números en posiciones adyacentes a las minas en el tablero.
    this.colocarNumeros = function(){
        for(let i = 0; i < this.getNumFilas(); i++){
            for(let j = 0; j < this.getNumColumnas(); j++){
                if(this.tablero[i][j] != "*"){
                    let numMinas = this.getNumMinasPos(i, j);

                    if(numMinas > 0){
                        this.tablero[i][j] = numMinas.toString();
                    }
                }
            }
        }
    }
}

//Para la lógica usar onClick
//preventDefault() para anular el comportamiento por defecto de un elemento y reset() para restaurarlo. 

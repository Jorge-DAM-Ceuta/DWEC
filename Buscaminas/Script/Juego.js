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
        //Se usa esta variable para almacenar los valores en una tabla.
        let tableroBuscaminas = "<table border='1'>";

        //Mediante un bucle for se recorren las filas.
        for (let i = 0; i < this.getNumFilas(); i++) {
            tableroBuscaminas += "<tr>";

            //Mediante otro bucle se recorren sus columnas.
            for (let j = 0; j < this.getNumColumnas(); j++) {
                //Determinamos un color según el valor obtenido en la posición actual.
                let valor = this.tablero[i][j];
                let color = "";

                //Si el valor de esa posición no es un espacio en blanco o una mina se le asigna un color.
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

                //Mediante una clase css se le da estilo a la casilla y se le asigna el color y el valor de la posición actual.
                tableroBuscaminas += `<td class='casilla' style='color: ${color};'>${valor}</td>`;
            }
            
            tableroBuscaminas += "</tr>";
        }

        tableroBuscaminas += "</table>";
        document.write(tableroBuscaminas);
    }

    //Rellenar con espacios en blanco el tablero.
    this.rellenarTablero = function(){
        //Mediante el primer bucle se crea un array por cada fila.
        for(let i = 0; i < this.getNumFilas(); i++){
            var fila = [];
            
            //Se añaden espacios en blanco como elementos del array 'fila' por cada columna que haya.
            for(let j = 0; j < this.getNumColumnas(); j++){
                fila.push(" ");
            }

            //Se añade la fila en cada vuelta del bucle for al tablero.
            this.tablero.push(fila);
        }
    }

    //Colocar tantas minas como numMinas aleatoriamente en el tablero.
    this.colocarMinas = function(){
        let minasColocadas = 0;

        //Mediante un bucle while se comprueba si el contador es menor al número de minas para seguir iterando.
        while(minasColocadas < this.getNumMinas()){
            //Se genera una fila y una columna aleatorias.
            let fila = parseInt(Math.random() * this.getNumFilas());
            let columna = parseInt(Math.random() * this.getNumColumnas());

            //Si la posición no contiene una mina se le asigna una y se aumenta el contador.
            if(this.tablero[fila][columna] != "*"){
                this.tablero[fila][columna] = "*";
                minasColocadas++;
            }
        }
    }

    //Contar minas adyacentes a una posición específica.
    this.getNumMinasPos = function(fila, columna){
        let contador = 0;

        //Se usa un bucle for para iterar desde la fila anterior a la siguiente.
        for(let i = fila - 1; i <= fila + 1; i++){
            //Se usa otro bucle for para iterar desde la columna anterior a la siguiente. 
            for(let j = columna - 1; j <= columna + 1; j++){
                //Comprueba que las posiciones se encuentran dentro del tablero.
                if(i >= 0 && i < this.getNumFilas() && j >= 0 && j < this.getNumColumnas()){
                    //Si esa posición contiene una mina se suma el contador.
                    if(this.tablero[i][j] == "*"){
                        contador++;
                    }
                }   
            }
        }

        //Devuelve el total de minas que se han encontrado.
        return contador;
    }

    //Coloca números en posiciones adyacentes a las minas en el tablero.
    this.colocarNumeros = function(){
        //Se itera cada fila del tablero. 
        for(let i = 0; i < this.getNumFilas(); i++){
            //Se itera cada columna de la fila actual.
            for(let j = 0; j < this.getNumColumnas(); j++){
                //Si la posición no contiene una mina se usa la función anterior para saber cuantas minas adyacentes hay.
                if(this.tablero[i][j] != "*"){
                    let numMinas = this.getNumMinasPos(i, j);

                    //Si el número de minas es mayor a 0 se almacena el número en la posición actual con .toString().
                    if(numMinas > 0){
                        this.tablero[i][j] = numMinas.toString();
                    }
                }
            }
        }
    }
}
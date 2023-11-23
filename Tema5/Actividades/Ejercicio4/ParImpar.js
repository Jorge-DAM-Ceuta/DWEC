
function ParImpar(numero){
    this.x = parseInt(numero);

    this.error = function(){
        typeof(this.x) != "number" ? console.error("Dato erróneo"):console.log("Dato correcto");
    }

    this.resuelve = function(){
        this.x % 2 == 0 ? alert("Par"):alert("Impar");
    }

    this.es = (number) => {
        let resultado = "";
        number % 2 == 0 ? resultado = "Par": resultado = "Impar";
        
        return resultado;
    }

    this.muestraRandom = function(){
        var numeros = [];

        for(let i = 0; i < 10; i++){
            let numero = parseInt(Math.random()*1000+1);
            numeros.push(numero);
        }
        
        for(let i = 0; i < numeros.length; i++){
            document.write(`${numeros[i]} es ${this.es(numeros[i])}<br/>`);
        }
    }
}
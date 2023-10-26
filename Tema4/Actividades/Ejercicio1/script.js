function numerosParesImpares(numero){
    numero % 2 == 0 ? document.write("<p>El número " + numero + " es par.</p>") : document.write("<p>El número " + numero + " es impar.</p>");
}

function escribirNumeros(){
    for(i = 0; i<=50; i++){
        numero = parseInt(Math.random()*10000);
        numerosParesImpares(numero);
    }
}

escribirNumeros();
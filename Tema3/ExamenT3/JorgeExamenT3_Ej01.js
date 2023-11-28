/*Esta función recibe una frase por parámetros y mediante un bucle for se recorre
cada letra de la cadena como si se tratase de un array. Se comprueba que en un 
intervalo de dos letras una sea mayúsculas sabiendo si la posición es par o impar.

Luego, se comprueba que si es una letra c o C se intercambie por una k o K respectivamente.

Fuera del bucle se comprueba si la última letra es vocal para añadirle tres H al final a la frase cani.
*/
function toCani(frase){
    var fraseCani = "";

    for(let i = 0; i<frase.length; i++){
        
        if(i % 2 == 0){
            if(frase[i] == "c" || frase[i] == "C"){
                fraseCani += "K";
            }else{
                fraseCani += frase[i].toUpperCase();
            }
            
        }else{
            if(frase[i] == "c" || frase[i] == "C"){
                fraseCani += "k";
            }else{
                fraseCani += frase[i];
            }
        }
        
    }

    if(frase[frase.length - 1] == "a" || frase[frase.length - 1] == "e" || frase[frase.length - 1] == "i" || frase[frase.length - 1] == "o" || frase[frase.length - 1] == "u"){
        fraseCani += "HHH";
    }

    document.write(`Ahora tu frase es CANI: ${fraseCani}` );
}

toCani("una cadena cani es como esta");
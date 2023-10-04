/* En esta práctica de JavaScript se han usado las siguientes variables:

1. dni para almacenar la cadena de caracteres introducida por el usuario 
mediante el método prompt().

2. letrasAceptadas contiene un array de las letras con las que debe 
finalizar el DNI.

3. numerosDNI almacenará, en caso de haber introducido algo en el prompt()
los caracteres del índice 0 al 7 mediante substring(0, 8).

4. comprobarLetra es un booleano que permitirá realizar una de las tres
condiciones para que el DNI introducido sea válido. Se establece su valor 
true en caso de que en el bucle se comprueben todas las letras del array y 
la introducida en la posición 8 del DNI coincida con alguna en mayúscula o
minúscula.

5. resultado será una cadena de caracteres con el objetivo de mostrar lo que
ha sucedido mediante un cuadro de diálogo alert().   
*/

var dni; 
var letrasAceptadas = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var numerosDNI = "";
var comprobarLetra = false;
var resultado = "";

/* He usado un bucle do-while ya que la petición del DNI debe realizarse
al menos una vez antes de que el bloque while haga la comprobación. 

La comprobación que realiza es simple, en el caso de que se cumpla alguna
de las tres condiciones pedidas (Que se pulse cancelar, que se escriba 
un 0 o que se introduzca un DNI válido), la variable resultado se inicializa
con un valor adecuado que ofrezca información sobre lo ocurrido, entonces
terminará el bucle. En caso de que por ejemplo, no se haya escrito nada, la
variable resultado estará vacía y el bucle continuará. 

Se le pide al usuario un DNI que se almacena en la variable dni. A partir de
aquí hay varios casos: 

1. Si se pulsa la tecla 'cancelar', dni pasará a valer 'undefined' y se mostrará
por pantalla un cuadro de diálogo con un mensaje.

2. Si se pulsa 'aceptar' con la cadena vacía se seguirá pidiendo que se introduzca un DNI.

3. Las dos primeras comprobaciones deben ir en primer lugar, en caso de que no se den 
ninguna de las dos entrará al bloque else en el que: 

3.1 Se recogen los caracteres del índice 0 al 7 mediante charAt(0, 8), estos deben contener 
los números del DNI para almacenarlos haciéndole un parseInt() en la variable numerosDNI.

3.2 Mediante un bucle for se recorre el array de letrasAceptadas con el fin de comprobar si 
alguna de las contenidas, tanto en mayúsculas como en minúsculas (con toLowerCase()) coinciden 
con la letra del DNI introducido, obteniendo la posición que contiene la letra con charAt(8).

3.3 Mediante un if se comprueba que la longitud del dni sea de 9 caracteres, que la función 
isNaN() de numerosDNI sea igual a false para comprobar que es un número y que comprobarLetra
valga true.

3.4 En el caso de que el valor introducido en la variable dni sea un 0, se 
mostrará por pantalla un cuadro de diálogo con un mensaje.
*/
do{
    dni = prompt("Introduce tu DNI:"); 

    if(dni == undefined){
        resultado = "Se ha pulsado la tecla 'cancelar' y el proceso ha terminado...";
        alert(resultado);

    }else if(dni == ""){
        //Al no escribirse nada en la variable resultado, da otra vuelta al bucle.
    }else{
        numerosDNI = parseInt(dni.substring(0, 8));

        for(let i = 0; i<letrasAceptadas.length; i++){
            if(dni.charAt(8) == letrasAceptadas[i] || dni.charAt(8) == letrasAceptadas[i].toLowerCase()){
                comprobarLetra = true;
            }
        }
        
        if((dni.length == 9 && isNaN(numerosDNI) == false && comprobarLetra == true)){
            resultado = `Se ha introducido un DNI válido: ${dni}`;
            alert(resultado);

        }else if(dni == 0){
            resultado = "Se ha introducido un 0 en el campo, el proceso ha terminado...";
            alert(resultado);
        }
    }
       
}while(resultado == "")



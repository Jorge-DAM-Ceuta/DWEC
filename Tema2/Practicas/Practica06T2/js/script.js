function adivinaAdivina(){
    var numeroCorrecto = parseInt(Math.random()*100) + 1;
    //console.log(numeroCorrecto);
    
    var numeroIntroducido;

    var numeroDeIntentos = 0;

    var resultado = "";

    do{

        numeroIntroducido = prompt("Adivina el número del 1 al 100:");

        /*Si se pulsa el botón cancelar se termina el juego y se escribe el resultado en la página. */
        if(numeroIntroducido == undefined){
            resultado = "Se canceló el juego.";
        }
        
        /*Si el valor introducido no es un número o se pasa del rango entre 0 y 1000, 
        se pide de nuevo que se introduzca un número. */
        if(isNaN(numeroIntroducido) || numeroIntroducido < 0 || numeroIntroducido > 1000 ){
           numeroIntroducido = prompt("Numero incorrecto, adivina el número del 1 al 100:");
        
        /*Si el valor introducido es un número entre 1 y 1000 se comprueba si el número es 
        mayor que el correcto y también si es menor que el correcto para indicarlo en un mensaje.
        */
        }else{
            numeroDeIntentos++;
        
            /*En caso de que el número sea correcto se ofrece al usuario jugar otra partida mediante 
            un cuadro de confirmación. Si se pulsa Aceptar se devuelve true y empieza de nuevo. */
            if(numeroIntroducido == numeroCorrecto){
                resultado = `El número ${numeroIntroducido} es correcto, felicidades!.<br>Acertaste el número en el intento número ${numeroDeIntentos}`;
                
                var nuevaPartida = confirm("¿Quieres jugar otra vez?");
                
                if(nuevaPartida == true){
                    adivinaAdivina();
                }

            }
            
            /*Si el número introducido es distinto de null comprueba lo siguiente. Se aplica al 
            caso en que se cancela el juego, para que no se cree una alerta con el valor null.*/
            if(numeroIntroducido != null){
                /*Si el número introducido es menor o mayor al correcto lo indicará por un alert.*/
                if(numeroIntroducido < numeroCorrecto){
                    alert("El número correcto es mayor de " + numeroIntroducido);
                    
                }else if(numeroIntroducido > numeroCorrecto){
                    alert("El número correcto es menor de " + numeroIntroducido);

                }
            }
        }
        
        document.write(resultado);

    }while(resultado == "");
}

adivinaAdivina();
    


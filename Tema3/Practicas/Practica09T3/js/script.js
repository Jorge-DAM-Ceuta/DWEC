const minus = "aábcçdeéfghiìjklmnñoópqrstuúüvwxyz";
const mayus = "AÁBCÇDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ";
const num = "0123456789";

var login; 
var comprobarLetrasLogin = false;
var comprobarNumerosLogin = false;

var password;
var comprobarMayusPassword = false;
var comprobarMinusPassword = false;
var comprobarNumerosPassword = false;
var comprobarNuevoCaracter = false;

/*Mediante un bucle do-while se pregunta al usuario por su nombre de usuario. 
Con un bucle for of se comprueba por cada caracter de la cadena introducida
que al menos uno coincida con una letra minuscula y un número. 

Si las dos condiciones se cumplen se pasará al siguiente bucle con un mensaje.*/
do{
    login = prompt("Introduce tu nombre de usuario:");

    for(let i of login){
        if(minus.includes(i)){
            comprobarLetrasLogin = true;
        }else if(num.includes(i)){
            comprobarNumerosLogin = true;
        }
    }

    if(comprobarLetrasLogin == false || comprobarNumerosLogin == false){
        alert("Nombre de usuario no válido. Introduce al menos una letra y un número.");
    }else{
        alert("Bien, ahora escriba su contraseña " + login + ":");
    }

}while((comprobarLetrasLogin == false || comprobarNumerosLogin == false));

/*Mediante otro bucle do-while se pregunta al usuario por su contraseña. 
Con un bucle for of se comprueba por cada caracter de la cadena introducida
que al menos uno coincida con una letra minuscula, una letra mayúscula, 
un número y un caracter especial. 

Si las tres condiciones se cumplen terminará el bucle con un mensaje.*/
do{
    password = prompt("Introduce tu contraseña:");

    for(let i of password){
        if(mayus.includes(i)){
            comprobarMayusPassword = true;
        }else if(minus.includes(i)){
            comprobarMinusPassword = true;
        }else if(num.includes(i)){
            comprobarNumerosPassword = true;
        }else{
            comprobarNuevoCaracter = true;
        }
    }

    if(comprobarMayusPassword == true && comprobarMinusPassword  == true && comprobarNumerosPassword == true && comprobarNuevoCaracter == true){
        alert("Contraseña correcta");
    }else{
        alert("La contraseña no es correcta");
    }

}while(comprobarMayusPassword == false || comprobarMinusPassword  == false || comprobarNumerosPassword == false || comprobarNuevoCaracter == false);
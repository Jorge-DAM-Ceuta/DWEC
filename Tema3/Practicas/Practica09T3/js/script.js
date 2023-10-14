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
    }

}while((comprobarLetrasLogin == false || comprobarNumerosLogin == false));

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
        alert("CONTRASEÑA VÁLIDA.");
    }else{
        alert("CONTRASEÑA NO VÁLIDA");
    }

}while(comprobarMayusPassword == false || comprobarMinusPassword  == false || comprobarNumerosPassword == false || comprobarNuevoCaracter == false);
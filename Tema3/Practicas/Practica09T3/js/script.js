const minus = "aábcçdeéfghiìjklmnñoópqrstuúüvwxyz";
const mayus = "AÁBCÇDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ";
const num = "0123456789";

var login = prompt("Introduce tu nombre de usuario:"); 
var comprobarLetrasLogin, comprobarNumerosLogin;

var password;
var comprobarMayusPassword, comprobarMinusPassword, comprobarNumerosPassword;

for(let i of login){
    if(minus.includes(i)){
        comprobarLetrasLogin = true;
    }else if(num.includes(i)){
        comprobarNumerosLogin = true;
    }
}

if(comprobarLetrasLogin == true && comprobarNumerosLogin == true){
    alert("Nombre de usuario válido.");
    password = prompt("Introduce tu contraseña:");

    for(let i of password){
        if(mayus.includes(i)){
            comprobarMayusPassword = true;
        }else if(minus.includes(i)){
            comprobarMinusPassword = true;
        }else if(num.includes(i)){
            comprobarNumerosPassword = true;
        }
    }

    if(comprobarMayusPassword == true && comprobarMinusPassword  == true && comprobarNumerosPassword == true){
        alert("CONTRASEÑA VÁLIDA.");
    }else{
        alert("CONTRASEÑA NO VÁLIDA");
    }
}else{
    alert("USUARIO NO VÁLIDO");
}
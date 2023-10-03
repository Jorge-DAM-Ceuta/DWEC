/*if(dni == undefined){
    print("Se ha pulsado cancelar");
}else if(dni == ""){
    print("Se ha pulsado aceptar con el campo vacío");
}else if(dni.length == 9){
    print("Se ha introducido: " + dni);
}*/

var dni = "dni"; 
var letrasAceptadas = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var comprobarNumeros = true;
var comprobarLetra = true;
var numerosDNI = dni.substring(0, 9);

do {

    dni = prompt("Introduce tu DNI:"); 

    if(!letrasAceptadas.includes(dni.length-1)){
        comprobarLetra = false;
    }
    
    if(isNaN(numerosDNI)){
        comprobarNumeros = false;
    }

}while(dni == undefined || dni == "" || dni == 0 || dni.length < 9 || comprobarLetra == false || comprobarNumeros == false);

nombre = prompt("Introduce tu nombre");
apellidos = prompt("Introduce tu apellidos");
direccion = prompt("Introduce tu dirección");
telefono = prompt("Introduce tu teléfono");
dni = prompt("Introduce tu DNI");

resultado = "Nombre completo: " + nombre + " " + apellidos + " Dirección: " + direccion + "<br>Teléfono: " + telefono + "<br>DNI: " + dni;

alert(resultado);
document.write(resultado);
document.getElementById("resultado").innerHTML = resultado;
console.log(resultado);


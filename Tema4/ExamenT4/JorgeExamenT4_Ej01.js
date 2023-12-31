function tribonacci(numero){
    if(numero <= 1){
        return 1;
    }else{
        return tribonacci(numero - 1) + tribonacci(numero - 3) + tribonacci(numero - 3);
    }
}

var numero = prompt("Introduce un número mayor que 3:");

if(numero > 3){
    alert(`El número ${numero} en tribonacci es: ${tribonacci(numero)}`);    
}


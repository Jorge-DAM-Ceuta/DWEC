//Primera forma de importar en otros documentos constantes/atributos y funciones.
/*export const PI_CUADRADO=Math.PI*Math.PI;

export function areaCirculo(radio){
    return radio**2 * Math.PI;
}

export function areaCuadrado(lado){
    return lado ** 2;
}*/


//Segunda forma
const PI_CUADRADO = Math.PI * Math.PI;

function areaCirculo(radio) {
    return radio ** 2 * Math.PI;
}

function areaCuadrado(lado) {
    return lado ** 2;
}

export {
    PI_CUADRADO,
    areaCirculo,
    areaCuadrado
}
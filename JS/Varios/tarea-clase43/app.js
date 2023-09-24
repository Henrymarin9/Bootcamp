/*  4. Sumatoria
    Debés crear una función llamada `summation` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

    Ejemplo:
        summation(3) debe retornar 6 porque hace (1 +2 +3)
        summation(8) debe retornar 36
*/


function summation(num){
    let sumatoria = 0;
    for(let i = 0; i <= num; i++){
        sumatoria += i;
    }
    return sumatoria;
    
}

console.log(summation(100));

// 7. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y retorne sus caracteres del medio. Si la cantidad de caracteres en el string es impar, debería retornar su caracter medio. Si la cantidad de caracteres en el string es par, debería retornar los dos caracteres del medio.

/*
    Ejemplos:

        middleCharacter(“hola”) // debe retornar “ol”
        middleCharacter(“cosas”) // debe retornar “s”   
*/

function middleCharacter(texto){

    let resultado;
    if(texto.length % 2 === 0){
        let caracter1 = texto.charAt(texto.length / 2);
        let caracter2 = texto.charAt((texto.length / 2) - 1);
        resultado = console.log(caracter2 + caracter1)

        
    }else{
        let caracter = texto.charAt(texto.length / 2);
        resultado = console.log(caracter)
        
    }
    return resultado;
    
}
middleCharacter("Hola");

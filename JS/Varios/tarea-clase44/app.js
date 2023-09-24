// 10. Mezclar arreglos
// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

// Ejemplo: 
// mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
// mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
// mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]

console.log("Ejercicio 1");

function mezclarArreglos(array1, array2){
    let resultado = [];
    let i=0;

    for(i in array1 < array2 ? array1:array2){

        resultado.push(array1[i]);
        resultado.push(array2[i]);
    
    }
    return resultado.filter((a) => a !== undefined);
}

console.log(mezclarArreglos([1,2,3,4],["h", "o", "l", "a"]));

// 9. Manejar dos arreglos
// Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

// Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

console.log("Ejercicio 2");

function arrayHandler(array1, array2){

    for(let i in array1){
        console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`);   
    }
}

arrayHandler([1,2,3,4], ["h", "o", "l", "a"]);
/*
    Existen dos arrays, cada uno con 5 , generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]
*/

function interseccion(arr1, arr2){

    let array_resultado = [];

    for(i=0; i<5; i++){

        let numeroActual = arr1[i];

        if(arr2.includes(numeroActual)){

            array_resultado.push(numeroActual);
        }
        
    }
    return console.log(array_resultado);

}

interseccion([1,2,3],[1,2,4]);

/*
    Dado un string como input, retornar la palabra mas larga del string. Para propositos de este ejercicio, una palabra esta separada unicamente por un solo espacio.
 
    palabraMasLarga("Cacho castaña") => "castaña"
*/

function cadena(str){

    let texto = str.split(" ");
    let array = [];
    for(let i=0;i<texto.length;i++){
        let num_palabra = texto[i].length;
        array.push(num_palabra);
        console.log()
    }
    array.sort((a,b) => a > b ? -1 : 1);
    console.log(array[0]);
    let palabraLarga;

    
    
}
cadena("cadena hola importante");

/*
//   texto.forEach((palabra) => {
    //     if (palabra.length > palabraMasLarga.length) {
    //     palabraMasLarga = palabra;
    //     }
    // });
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].length > palabraMasLarga.length) {
            palabraMasLarga = texto[i];
        }
    }

/*
function cadena(string){
    // Dividir el string usando el espacio
    const texto = string.split(' ');

    // Variable para almacenar la palabra más larga
     let palabraMasLarga = '';

   // Recorrer c/palabra para encontrar la más larga
      texto.forEach((palabra) => {
        if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
        }
    });

  return palabraMasLarga;
}


const input = 'Hola cadena importante hola';
const palabraMasLarga = cadena(input);
console.log(palabraMasLarga);
*/
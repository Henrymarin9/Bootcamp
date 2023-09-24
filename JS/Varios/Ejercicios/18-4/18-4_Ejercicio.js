var valores = [true, 5, false, "hola", "adios", 2];
let num_1 = valores[3].length;
let num_2 = valores[4].length;
if( num_1 > num_2){
    console.log(`La palabra '${valores[3]}' tiene mas caracteres que '${valores[4]}' `);

}else if(num_1 < num_2){
    console.log(`La palabra '${valores[4]}' tiene mas caracteres que '${valores[3]}' `);

}

num_1 = valores[1];
num_2 = valores[5];

const calcular = function(){ 
    suma = num_1 + num_2;
    resta = num_1 - num_2;
    multiplicacion = num_1 * num_2;
    division = num_1 / num_2;
    modulo = num_1 % num_2;
    var resultados = [suma, resta, multiplicacion, division, modulo];

    return resultados;
}
let resultados = calcular()
let operaciones = ["suma", "resta", "division", "multiplicacion", "modulo"];
for(let i = 0; i < 5; i++){

    console.log(`La ${operaciones[i]} es ${resultados[i]}`);
}

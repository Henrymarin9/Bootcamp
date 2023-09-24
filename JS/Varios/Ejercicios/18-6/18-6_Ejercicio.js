




function calculo(){

    var letras = [
        'T', 'R', 'W', 'A',
        'G', 'M', 'Y', 'F',
        'P', 'D', 'X', 'B',
        'N', 'J', 'Z', 'S',
        'Q', 'V', 'H', 'L',
        'C', 'K', 'E', 'T'
    ];
    
    let dni = prompt("Cual es tu DNI: ");
    let letra = prompt("Indique una letra: ");
    let numero = dni % 23;
    let letraArray = letras[numero];
    

    if(dni < 0 || dni > 99999999){
        alert("El numero indicado no es valido");
        console.log("El numero no es valido");
        

    }
    if(letra.toUpperCase !== letraArray.toUpperCase){
        console.log(`la letra indicada '${letra}' es diferente de la letra '${letraArray}'`)
        
    }
    else{
        console.log(`el DNI es: ${dni} y su letra es: ${letraArray}`);
    }
}


calculo();
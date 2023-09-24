
//35231 => [1,3,2,5,3]
//0 => [0]
function conversion (num) {
    let cantidad = num.toString();
    console.log(num.toString())
    let array = [];
    for(let i = cantidad.length -1; i >= 0; i--){
        array.push(parseInt(cantidad[i]));
    }
    return array;
  
}
let num = 123;
const array = conversion(num);
console.log(array);


//The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

function natural(N){
    
    if(N >= 1 && N <= 10^9){
        let array = []
        for(let i = 1; i<= N; i++){
            let numero = i
            if(numero % 5 && numero % 3){

            }else if(numero % 3){

            }else if(numero % 2){

            }else{
              array.push(numero);
            }
            
        }
        return array;
    }
    else{

        console.log(`N debe estar entre 1 <= N <= 10^9`)
    }
    
    
}
console.log(natural(33))

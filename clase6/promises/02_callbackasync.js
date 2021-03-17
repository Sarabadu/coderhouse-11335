/**
 * creamos nuestra propia funcion async
 */

console.log("0")

function teEspero(fn){
    console.log("2")

    setTimeout(fn, 1000);
    return;
}

console.log("1")
teEspero(()=>{console.log("4")})
console.log("3")
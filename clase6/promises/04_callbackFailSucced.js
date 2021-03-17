/**
 * Otro patron conocido es el que recibe 3 parametros, el valor, una funcion por ok y una funcion por error
 * 
 */


function teEspero(val, okFn, errFn) {
    if (val == 1) {
        setTimeout(()=>errFn("No me gusta el 1"),0) // Ups!!!  i did it again
        return;
    }
    setTimeout(() => {
        okFn("Datos datos datos")
    }, 1000);
    return;
}


function ok(data) {
    console.log("tengo datos", data)
    return;
}
function error(err) {
    console.log("error", err)
    return;

}

console.log("1")
teEspero(2, ok, error)
console.log("2")



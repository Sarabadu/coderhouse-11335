/**
 * El patron mas aceptado de callback es  que se la funcion de callback reciba 2 parametros, (err,data)
 * 
 */


function teEspero(val, fn) {
    if (val == 1) {
        setTimeout(()=>fn("No me gusta el 1", null),0)                  // Ups!!! aca estamos dejandouna funcion syncronica cuando  hay errores exigimos reparacion
        return;
    }
    setTimeout(() => {
        fn(null, "Datos datos datos")
    }, 1000);
    return;
}


function callback(err, data) {
    if (err) {
        console.log("error", err)
        return;
    }
    console.log("tengo datos", data)
    return;
}

console.log("1")
teEspero(1, callback)
console.log("2")

console.log("2")
console.log("2")
console.log("2")
console.log("2")
console.log("2")
console.log("2")


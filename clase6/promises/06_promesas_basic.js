/**
 * Promesas
 * no les puedo prometer nada....
 *  */

let pedido = new Promise(function (fnPorOk, fnPorErr) {
    //console.log("ejecutando promesa")
    fnPorOk("aqui tiene su hamburgesa ")
})

//console.log("??")

pedido.then(function (res) {
    throw new Error("Error")
    console.log("Señor Sanchez", res)
    return 1;
}).catch((err)=>{
    console.log("ourrio un error" , err)
    return "todo ok"
}).then((valor)=>{
    console.log("valor",valor)
})
// .then(function (dato) {
//     console.log("el dato es ", dato)
// })


/*****************************************************************************/
// let prom2 = Promise.resolve("arranco resuelta, pero sigo siendo una promesa")

// console.log("promesa resuelta", prom2)




/*****************************************************************************/
// let pedido = new Promise(  function (resolver,rechazar){rechazar("nos quedamos sin mayonesa")})

/*****************************************************************************/
// function ok(res) {
//     console.log("Señor Sanchez 1", res)
// }
// function ko(err) {
//     console.log("Error en el pedido 1: ", err)
// }

// pedido.then(ok, ko)


// pedido.then(function (res) {
//     console.log("Señor Sanchez 2",res)
// },function (err) {
//     console.log("Error en el pedido 2: ",err)
// })


/*****************************************************************************/
// let prom2 = Promise.reject("arranco resuelta, pero sigo siendo una promesa")

// console.log("promesa resuelta", prom2)



/**
 * Les prometo que es un quilombo 
 * */


function obtenerCliente(id) {
    return new Promise(function (resolve, reject) {
        // 
        if (id <= 0) {
                reject("Error cliente no existe")  
            return;
        }
        setTimeout(() => {
            resolve({ id: id, cuenta: 120 + id })
        }, 5000);
        return;

    })
}

let prom = obtenerCliente("Hola");

console.log("te cache")

/*****************************************************************************/
prom.then(
    function (data) {
        console.log("Data1:", data)
    },
    function err(err) {
        console.log("Error: ", err)
     })




/*****************************************************************************/

// setTimeout(() => {
//     prom.then(a => console.log("la promesa termino hace rato", a))

//     prom.then(function (lalala) {
//         console.log("flallalalal", lalala)
//     })

// }, 2000);



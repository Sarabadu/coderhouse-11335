
function obtenerCliente(id, fn) {
    if (id <= 0) {
        setTimeout(() => {
            fn("Error cliente no existe", null)
        }, 500);
        return;
    }
    setTimeout(() => {
        fn(null, { id: id, cuenta: 120 + id })
    }, 500);
    return;
}

function obtenerCuenta(cuenta, fn) {
    if (cuenta <= 124) {
        setTimeout(() => {
            fn("La cuenta esta bloqueada", null)
        }, 500);
        return;
    }
    setTimeout(() => {
        fn(null, { cuenta: cuenta, ultimoMov: 1000 + cuenta })
    }, 500);
    return;
}

function obtenerMovimiento(mov, fn) {
    if (mov <= 1130) {
        setTimeout(() => {
            fn("Usted no tiene permisos para ver ese movimiento", null)
        }, 1000);
        return;
    }
    setTimeout(() => {
        fn(null, { mov: mov, categoria: "turbio", imp: 70000 })
    }, 1000);
    return;
}

let impUltimoMovimiento = 0

obtenerCliente(21,
    function (err, data) {
        if (err) {
            console.log("Error: ", err)
            return;
        }
        console.log("Data1:", data)
        obtenerCuenta(data.cuenta,
            function (err, data) {
                if (err) {
                    console.log("Error: ", err)
                    return;
                }
                console.log("Data2:", data)
                obtenerMovimiento(data.ultimoMov,
                    function (err, data) {
                        if (err) {
                            console.log("Error: ", err)
                            return;
                        }
                        console.log("Data3:", data, "al fin!!!")
                        impUltimoMovimiento = data.ultimoMov  // todo lo que tenga que hacer con los datos lo tengo que meter aca adentro                   
                    })
            })
    })

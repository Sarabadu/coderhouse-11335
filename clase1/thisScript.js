let obj = {
    nombre:'Juan',
    diceHola: function(){
        console.log('hola soy ' + this.nombre)
    },
}

obj.diceHola()

// let obj2 = {nombre:'pablo'}
// obj2.saluda = obj.diceHola   // notemos que no estamos ejecutando al funcion

// obj2.saluda()


// let fun = obj.diceHola
// fun()


// var nombre= 'pepe'


// let fun2 = obj.diceHola.bind(obj)
// fun2()



// let obj3 = {
//   nombre: "Juan",
//   diceHola: function () {
//     console.log("hola soy " + this.nombre);
//   },
//   enUnRato: function () {
//     setTimeout(function () {
//       console.log("1 segundo mas tarde");
//       this.diceHola();
//     }, 1000);
//   },
// };

// obj3.enUnRato()
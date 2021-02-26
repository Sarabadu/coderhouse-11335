let obj = {
    nombre:'Juan',
    diceHola: function(){
        console.log('hola soy ' + this.nombre)
    },
}

function pepe(nombre) {
  console.log(this.lalala + nombre);
}

// pepe()

obj.hola = pepe
obj.lalala = "lalaal "
obj.hola("mi nombre es nombre")
// obj.diceHola()

 let obj2 = {nombre:'pablo'}
 obj2.saluda = obj.diceHola   // notemos que no estamos ejecutando al funcion

//  obj2.saluda();


//  let fun = obj.diceHola;
//  fun();


 //this.nombre = "pepe";


// let fun2 = obj.diceHola.bind(obj2);

// fun2();



// let obj3 = {
//   nombre: "Juan",
//   diceHola: function () {
//     console.log("hola soy " + this.nombre);
//   },
//   enUnRato: function () {
//     setTimeout(() => {
//       console.log("1 segundo mas tarde");
//       this.diceHola();
//     }, 1000);
//   },
// };

// obj3.enUnRato();




class Alumno {
  constructor(nombre) {
    this.nombre = nombre;
  }

  diceHola() {
    console.log("Hola soy " + this.nombre);
  }
}

// let juan = new Alumno("Juan");
// let pablo = new Alumno("Pablo");

//  juan.diceHola();
//  pablo.diceHola();

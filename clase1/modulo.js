export class Alumno {
  constructor(nombre) {
    this.nombre = nombre;
  }

  diceHola() {
    console.log("Hola soy " + this.nombre);
  }
}

export const suma = (a, b) => a + b;

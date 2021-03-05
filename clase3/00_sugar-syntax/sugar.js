/**
 * For.. of
 */

let fullStack = ["node", "mongo", "react", "firebase"];

// for (let index = 0; index < fullStack.length; index++) {
//   const element = fullStack[index];

// }
// for (const elemento of fullStack) {
//   console.log(elemento);
// }

/*********************************************/

/**
 * Math shorcuts
 */

// let count = 0;

while (count < 5) {
  console.log(count);
  count += 2;
}

/*********************************************/

/**
 * Prototype - Class
//  */
// function Coder(name) {
//   this.name = name;
// }

// Coder.prototype.sayhi = function () {
//   console.log(`Hello I'm ${this.name}`);
// };

class Coder {
  constructor(name) {
    this.name = name;
  }
  sayhi() {
    console.log(`Hello I'm ${this.name}`);
  }
}

const Juan = new Coder("juan");

Juan.sayhi();

/*********************************************/
/**
 * Destructing
 */

const obj = { name: "Juan", role: "Teacher" };

// const name = obj.name;
// const role = obj.role;

const { name, role } = obj;

const u2 = ["uno", "dos", "tres", "catorce"];

const [head, ...tail] = u2;

console.log(pedro, juan, lalala);
// const uno = u2[0];
// const dos = u2[1];
// const tresCatorce = [u2[2], u2[3]];

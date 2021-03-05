function at(n) {
  n = Math.trunc(n) || 0;
  if (n < 0) n += this.length;
  if (n < 0 || n >= this.length) return undefined;
  return this[n];
}

if (!Array.prototype.at) {
  Array.prototype.at = at;
}


if (!fetch){

  let fetch = function(){
    ...
  }
}

let fruits = ["banana", ["pera", "naranja"], "manzana"];

console.log(fruits.flat());

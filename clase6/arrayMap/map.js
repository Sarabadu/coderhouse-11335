let a;
let res;

a = [1, 2, 3, 4, 5, 6, 6];

/*****************************************************************************/
//array map devuelve un nuevo array aplicando una funcion
res = a.map((e) => e *2);

// console.log("res", res)
// console.log("a",a)

/*****************************************************************************/

/*****************************************************************************/

a = [
  { name: "juan", age: 37 },
  { name: "carlos", age: 27 },
  { name: "ana", age: 40 },
  { name: "sofia", age: 55 },
  { name: "victoria", age: 11 },
  { name: "federico", age: 19 },
  { name: "pepe", age: 2 },
];

// /*****************************************************************************/

// res = a.map((e) => e.age);
//  console.log(res, a);

res = a.map((e) => {
  const categoria = e.age >= 18 ? "mayor" : "menor";
  
  return { name: e.name, categoria }
 });


 console.log(res, a);

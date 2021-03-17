/**
 * then y cach mix
 */

let job = new Promise((resolve, reject) => {
  resolve("1 er valor");
});

job
  .then((v) => {
    console.log(v);
    return "segundo valor";
  })
  .then((v) => {
    console.log(v);
    return "tercer valor";
  })
  .catch((err) => {
    console.log(err);
    return "dio error pero sigo el flujo";
  })
  .then((v) => {
    console.log(v);
    return "cuarto valor";
  })
  .then((v) => {
    console.log(v);
    return "quinto valor";
  })
  .catch((err) => {
    console.log(err);
    return "dio error pero sigo el flujo";
  })
  .finally((e) => {
    console.log("simepre me ejecuto al final");
  });

// y podemos seguir eternamente

//   .then((v) => {
//     console.log(v);
//     return "sexto valor";
//   });

// ejemplos ejecutados en consola de browser


// Get de /posts/:id
let promesa= fetch('https://jsonplaceholder.typicode.com/posts/1')

// vemos que contiene el objeto response
promesa.then((res)=>{console.log(res) });

// parseamos el json body a objeto
promesa
.then((res)=>{ return res.json() })
.then((json) => console.log(json));



// segundo ejemplo de GET
let promesa2= fetch('https://jsonplaceholder.typicode.com/users')

promesa2
.then((res)=>{ return res.json() })
.then((json) => console.log(json));


// Ejemplos de post con body invalido
let promesa3 = fetch('https://jsonplaceholder.typicode.com/users',
{ method: "POST",
  body: "1111",
  headers: { "content-type": "application/json"}
})

// actualizo la manera correcta de controlar el error

promesa3
.then(res=>{ // si da error 500 la promesa del fetch se resuelve ok (no hace un reject)
    if (res.ok){ // vemos el status del objeto response 
        return res.json()  // si es status dio ok parseamos el body
    }
    throw new Error("Error en el llamado") //si el response dio !ok lanzamos un error o lo controlamos aca
}) 
.catch(err=> console.log(err)) 



// ejemplo de post con body valido
let promesa4 = fetch('https://jsonplaceholder.typicode.com/users',
{ method: "POST",
  body: '{"name":"juan"}',
  headers: { "content-type": "application/json"}
})
.then(res=>{ // si da error 500 la promesa del fetch se resuelve ok (no hace un reject)
    if (res.ok){ // vemos el status del objeto response 
        return res.json()  // si es status dio ok parseamos el body
    }
    throw new Error("Error en el llamado") //si el response dio !ok lanzamos un error o lo controlamos aca
})  
.then(json=>console.log(json))
.catch(err=>console.log(err))


// intentamos consultar el recurso creado
fetch('https://jsonplaceholder.typicode.com/users/11').then(res=>res.json()).then(obj=>console.log(obj))
//importamos modulo readFile
//Como fs es un modulo muy grande podemos traer el metodo especifico que queramos (como en angular)
const { readFile } = require("fs");

//!CALLBACK HELL⚠️
readFile("./data/first.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });



//Esta promise es una funcion nativo de javascript, y espera una función con dos parametros uno en que la promesa se resuelve correctamente (resolve) y otra en la que ocurre un error (reject)
const getText = (pathFile) => {
  return new Promise((reject, resolve) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

//utilizamos then si la promesa se resuelve correctamente y error si ocurre un error
getText("./data/fourth.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));



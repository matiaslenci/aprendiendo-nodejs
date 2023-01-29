const fs = require("fs");

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data); // hola mundo

  //quiero que lea el segundo archivo
  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data); // hola mundo

    //Escribimos un nuevo archivo en la carpeta data
    fs.writeFile(
      "./data/newfile.txt",
      "archivo creado desde fs",
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
      }
    );
  });
});

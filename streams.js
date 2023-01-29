const { writeFile } = require("fs/promises");

//creamos un archivo pesado para ejemplo de manejo de grande cantidades de datos con streams
const createBigFile = async () => {
  await writeFile("./data/bigFiles.txt", "hola mundo".repeat(100000));
}; 

createBigFile();

const { createReadStream } = require("fs");

//convertimos esta variable en un objeto con propiedades como si fuera un evento
const stream = createReadStream("./data/bigFiles.txt", "utf-8");

//lo manipulamos como si trabajaramos con un evento de node
stream.on("data", (chunk) => {
  console.log(chunk);
});

//cuando termine de leer el archivo emite un evento
stream.on("end", () => {
  console.log("ya termime de leer el archivo");
});

//si ocurre un error emite un evento que muestre ese error
stream.on("error", (error) => {
  console.log(error);
});

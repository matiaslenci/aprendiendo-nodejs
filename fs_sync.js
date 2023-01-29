const fs = require("fs");

//fs sync
//este metodo lo que hace es simplemente leer un archivo si le pasamos una ruta
//con utf-8 estamos conviritendo nuestro 'Buffer' (nuestro dato crudo) en un sting que podemos comprender
const first = fs.readFileSync("./data/first.txt", "utf-8");
//otra forma de mostrarlo sin el 'utf-8' es con el toString()
const second = fs.readFileSync("./data/second.txt");

console.log(first);
console.log(second.toString());

//este metodo lo que hace es tambien recibir una ruta pero ya no para leer sino para colocar un archivo
fs.writeFileSync("./data/third.txt", "este es un tercer archivo");
//ahora se creo un nuevo archivo en la carpeta data

//tambien podemos pasarle el parametro del contenido por una variable
const title = "este es el contenido del archivo";

fs.writeFileSync("./data/fourth.txt", title);

//si el archivo ya existe sobreescribira el anterior

//si lo que queremos es añadir al contenido ya existente debemos agregar una flag con un 'a' (append)
fs.writeFileSync("./data/fourth.txt", title, {
  flag: "a",
});

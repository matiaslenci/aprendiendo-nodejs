const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  //creamos una funcion que lea 'bigFile.txt'
  const fileStream = createReadStream("./data/bigFiles.txt", {
    encoding: "utf-8",
  });

  //lo enviamos al front-end
  fileStream.on("data", (chunck) => {
    fileStream.pipe(res);
  });

  //si ocurre un error lo pasa por consola
  fileStream.on("error", (error) => {
    console.log(error);
  });
});

server.listen(3000);
console.log('Server on port 3000');

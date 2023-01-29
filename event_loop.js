const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.write("<h1>bienvenido a home</h1>");
    return res.end();
  }

  if (req.url === "/about") {
    //!blockin code
    for (let i = 0; i < 10000; i++) {
      console.log(Math.random() * i);
    }
    res.write("<h1>acerca de</h1>");
    return res.end();
  }

  res.write(`<h1>Not found</h1>`);
  res.end();
});

server.listen(3000);

console.log("Servidor escuchando en el puerto 3000");

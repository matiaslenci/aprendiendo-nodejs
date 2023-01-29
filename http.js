//importamos el modulo http
const http = require("http");

//Creamos un server basico
//le pasamos una funcion flecha con los parametros request y response.
const server = http
  .createServer((request, response) => {
    console.log(request.url);
    //con request url estamos solicitando la url de la pagina en la que estamos
    //si la pagina es por ejemplo /home podemos devolver un mensaje de bienvenido a la home
    if (request.url === "/") {
      //Para pasarle contenido al navegador utilizo .write
      response.write("<h1>bienvenido a home</h1>");
      //para decirle al servidor que ya termine de enviar mi respuesta usamos .end
      return response.end();
    }
    if (request.url === "/about") {
      response.write("<h1>acerca de</h1>");
      return response.end();
    }
    //Si no encuentra alguna de las rutas que establecimos devuelve un not found
    response.write(`
    <h1>Not found</h1>
    <p>no se encontro la pagina que buscas</p>
    <a href="/" >volver al inicio</a>
    `);
    response.end();
  })
  
  server.listen(3000); //le pedimos que escuche el puerto 3000

console.log("Servidor escuchando en el puerto 3000");

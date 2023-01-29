//importamos el modulo
const EventEmitter = require("events");

//guardamos en una constante un nuevo evento personalizado
const customEmitter = new EventEmitter();

//en lugar de escuchar por un 'click' por ejemplo esta  escuchando por un evento que se llama 'response'
//con 'on' escucha el evento personalizado
customEmitter.on("response", (data) => {
  console.log("recibido");
  console.log(data);
});

//ahora podemos emitir una respuesta de la variable que creamos antes con emit()
customEmitter.emit("response", "Hola mundo");
customEmitter.emit("response", "Matias");
customEmitter.emit("response", 30);
customEmitter.emit("response", { name: " matias " });

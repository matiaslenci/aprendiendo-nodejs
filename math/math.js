//creamos unas funciones matematicas para exportar a esmodule.js
export function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

//exportación individual
export function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

//exportamos por default las funciones
/* export default {
  multiplicar,
  dividir,
  sumar,
  restar,
};

 */
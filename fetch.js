try {
  //capturamos la respuesta de la api
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //la convertimos en JSON
  const data = await res.json();
  //la pasamos por consola
  console.log(data);
} catch (err) {
  console.log(err);
}

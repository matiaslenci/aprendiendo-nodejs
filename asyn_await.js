//async y await son una forma mas simple y moderna de poder escribir promesas
const { readFile } = require("fs");

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

async function read() {
  try {
    const result = await getText("./data/first.txt");
    console.log(result);
    //throw new Error("esto es un error que no se esperaba");
    const result2 = await getText("./data/second.txt");
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

read();

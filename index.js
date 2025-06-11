const miPromesa = new Promise((resolve, reject) => {
    const time = Math.random() * 10;
  
    setTimeout(() => {
    const random = Math.random();
    if (random > 0.5) {
      console.log("Es cara");
      resolve(time);
    } else {
      console.log("Es cruz");
      reject(time);
    }
  }, time * 1000);
});

const pageNode = document.querySelector(".page");

miPromesa
  .then((result) => {
    console.log('Ganaste y tarde : ' + result);
    pageNode.style.background = "green";
  })
  .catch((result) => {
    console.log('Perdiste y tarde : ' + result);
    pageNode.style.background = "black";
  });

setTimeout(() => {
  console.log("Hola Mundo");
}, 5000);

function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject('Cai no erro');
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

/* esperaAi('Fase 01', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 02', rand())
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 03', rand());
    })
    .then(fase => console.log(fase))
    .catch(e => console.log(e));
 */

async function executa() {
  try {
    const fase1 = esperaAi("Fase 01", 1000);
    console.log(fase1);

    setTimeout(function() {
      console.log('Essa promisse estava pendente', fase1);
    }, 1100)

    const fase2 = await esperaAi('Fase 02', rand());
    console.log(fase2);

    const fase3 = await esperaAi("Fase 03", rand());
    console.log(fase3);

    console.log("Terminamos na fase: ", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false);
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

// Promise.all / Promice.race/ Promise.resolve/ Promise.reject

const promises = [
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 2', 500),
    esperaAi('Promisse 3', 1000),
    // esperaAi(1000, 1000),
];

Promise.all(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    });

    

Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    })



baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e));

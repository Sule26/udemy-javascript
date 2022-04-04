// Desclaração de função (Function Hoisting)
falaOi();
function falaOi () {
    console.log('Oie');
}


// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();


function executaFuncao (funcao) {
    funcao();
}

executaFuncao(souUmDado);


// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function")
}

funcaoArrow();


// Dentro de um Objetos

const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();

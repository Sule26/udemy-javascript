const verdadeira = true;

// Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando


if(verdadeira) {
    let nome ='Otávio' // criando
    var nome2 = 'Rogério' // redeclarando
    console.log(nome, nome2);
    if(verdadeira) {
        let nome = 'Outra coisa';
        var nome2 = 'Ronaldo' // redeclarada
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);

var sobrenome = 'Miranda';
function falaOi() {
    var nome3 = 'Luiz';
    console.log(nome3, sobrenome);

    if(verdadeira) {
        let nome = 'Luiz';
        console.log(sobrenome);
        console.log(nome);
    }
    
}

falaOi();

console.log(sobrenome1);

var sobrenome1 = 'Silva';

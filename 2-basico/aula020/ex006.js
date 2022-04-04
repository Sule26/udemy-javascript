function adicionar() {
    const nome = document.querySelector('input.nome');
    const sobrenome = document.querySelector('input.sobrenome');
    const peso = document.querySelector('input.peso');
    const altura = document.querySelector('input.altura');
    const resultado = document.querySelector('div.resultado');
    const pessoas = [];
    const pessoa = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
    };
    pessoas.push(pessoa);
    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
}

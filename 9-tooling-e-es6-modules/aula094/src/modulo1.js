const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;

function soma(x, y) {
  return x + y;
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma}

// export { nome, sobrenome as sobrenome2, idade, soma };

// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // Mostra a chave
      value: nome, // Valor
      writable: true, // Pode alterar o valor ou não
      configurable: true, // Pode configurar (Usando outro defineProperty) ou apagar(delete) novamente
    },
    preco: {
      enumerable: true, // Mostra a chave
      value: preco, // Valor
      writable: true, // Pode alterar o valor ou não
      configurable: true, // Pode configurar (Usando outro defineProperty) ou apagar(delete) novamente
    }
  });

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave
    value: estoque, // Valor
    writable: true, // Pode alterar o valor ou não
    configurable: true, // Pode configurar (Usando outro defineProperty) ou apagar(delete) novamente
  });

}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);

for(let valor in p1) {
  console.log(valor);
}

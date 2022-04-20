// defineProperty - Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
  
    let estoquePrivado = estoque;
  
    Object.defineProperty(this, "estoque", {
      enumerable: true, // Mostra a chave
      // value: estoque, // valor
      // writable: true, // pode alterar
      configurable: true, // configurável
      get: function () {
        return estoquePrivado;
      },
      set: function (valor) {
          if(typeof valor !== 'number') {
              throw new TypeError('Mensagem');
          }
        estoquePrivado = valor;
      },
    });
  }
  
  function criaProduto(nome) {
      return {
          get nome() {
              return nome;
          },
          set nome(valor) {
              nome = valor.replace('coisa', '');
          }
      }
  }
  
  const p1 = new Produto("Camiseta", 20, 3);
  console.log(p1);
  p1.estoque = 20;
  console.log(p1.estoque);
  
  
  const p2 = criaProduto('Camisa');
  console.log(p2);
  console.log(p2.nome);
  p2.nome = 'Qualquer coisa';
  console.log(p2.nome);
  
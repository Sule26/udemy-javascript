function Calculadora() {
    this.display = document.querySelector(".display");

    this.inicia = () => {
      this.capturaCliques();
      this.capturaEnter();
    }

    this.clear = () => this.display.value = "";
    this.delete = () => this.display.value = this.display.value.slice(0, -1);
    this.addNumDisplay = (el) => {
      this.display.value += el.innerText;
      this.display.focus();
    } 

    this.capturaEnter = () => {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    }

    this.realizaConta = () => {5
      try {
        let conta = eval(this.display.value);
        if (!conta) {
          alert("Conta inválida");
          return;
        }
        this.display.value = conta;
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    }

    this.capturaCliques = () => {
      document.addEventListener("click", (e) => {
        // Arrow function mantem o this antigo
        const el = e.target;
        if (el.classList.contains("btn-num")) this.addNumDisplay(el);
        if (el.classList.contains("btn-clear")) this.clear();
        if (el.classList.contains("btn-del")) this.delete();
        if (el.classList.contains("btn-eq")) this.realizaConta();
      });
    };

}

const calc = new Calculadora();
calc.inicia();

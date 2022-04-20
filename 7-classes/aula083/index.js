function teste() {
    console.log('Este é meu teste.');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }


    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.'); 
        console.log(this.volume); // Não tenho acesso a this.tv e this.volume
    }
}


const controle1 = new ControleRemoto('LG');
const controle2 = new ControleRemoto('Samsung');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle2.aumentarVolume();
console.log(controle1)
console.log(controle2);

ControleRemoto.trocaPilha(); // Troca a pilha de todos os controles

console.log(Math.random());

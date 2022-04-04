// IIFE -> Immediately Invoked Function Expression

(function() {
    const sobrenome = 'Miranda';
    function falaOi(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(falaOi('Luiz'));
    }
    falaNome();
})();



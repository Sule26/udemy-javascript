let n1 = Number(window.prompt("Digite um número:"));
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

numeroTitulo.innerHTML = `<strong> ${n1}</strong>`;
texto.innerHTML += `<p>Raiz quadrada: <strong>${Math.sqrt(n1)}</strong></p>`;
texto.innerHTML += `<p>55 é inteiro: <strong>${Number.isInteger(n1)}</strong></p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(n1)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(n1)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(n1)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${n1.toFixed(2)}</strong></p>`;



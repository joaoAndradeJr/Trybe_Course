//Crie seu código abaixo dessa linha:
const botao1 = document.querySelector('.botao1');
const botao2 = document.querySelector('.botao2');
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');
const caixaTexto = document.querySelector('.caixa-texto');

function fundoVerde () {
  caixaUm.style.backgroundColor = 'green';
}

function trocaTexto1 () {
  caixaUm.innerText = caixaTexto.value;
}

function trocaTexto2 () {
  caixaDois.innerText = caixaTexto.value;
}

function alerta () {
  alert('Go Trybe!');
}

botao1.addEventListener('mouseover', fundoVerde);
botao1.addEventListener('click', trocaTexto1);
botao2.addEventListener('click', trocaTexto2);

caixaTexto.addEventListener('paste', alerta);

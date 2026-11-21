// Faça o contador funcionar. Edite só este arquivo.
//
// TODO 1: mostre 0 no #total ao carregar a página.
// TODO 2: ao clicar em #somar, aumente 1 e atualize o #total.
// TODO 3: ao clicar em #zerar, volte para 0 e atualize o #total.
//
// Dica: document.querySelector("#total"), addEventListener("click", ...),
//       elemento.textContent = valor.

// escreva seu código aqui
// 1. Selecionar os elementos
const total = document.querySelector("#total");
const botaoSomar = document.querySelector("#somar");
const botaoZerar = document.querySelector("#zerar");

// Variável que guarda o valor do contador
let contador = 0;

// 2. Ao carregar, #total mostra 0
total.textContent = contador;

// 3. Clicar em Somar aumenta 1 e atualiza o #total
botaoSomar.addEventListener("click", () => {
  contador++;
  total.textContent = contador;
});

// 4. Clicar em Zerar volta para 0
botaoZerar.addEventListener("click", () => {
  contador = 0;
  total.textContent = contador;
});
/*

Ter a "janela" (navegador). OK
Ter o HTML. OK
Pegar o coração. OK
Pegar clique no coração.
Com o clique do usuário, mostrar um aviso na tela.

*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
    console.log("aê");
};
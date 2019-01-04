/*

Ter a "janela" (navegador). OK
Ter o HTML. OK
Pegar o coração. OK
Pegar clique no coração. OK
Com o clique do usuário, mostrar um aviso na tela. OK

*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
    if ($heart.classList.contains('-active')) {
        $heart.classList.remove('-active');
    }
    else {
        $heart.classList.add('-active');
    }
};
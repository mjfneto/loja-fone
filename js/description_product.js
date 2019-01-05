/*

Ter a "janela" (navegador). OK
Ter o HTML. OK
Pegar o coração. OK
Pegar clique no coração. OK
Com o clique do usuário, mostrar um aviso na tela. OK

*/

const $heart = document.querySelector(".-heart");
const $firstStar = document.querySelector(".star");

$heart.addEventListener("click", handleClick);
$firstStar.addEventListener("click", handleClickFirstStar);

function handleClick() {
    $heart.classList.toggle('-active');
};


function handleClickFirstStar() {
    $firstStar.classList.toggle("-active");
};
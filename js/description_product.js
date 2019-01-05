/*

Ter a "janela" (navegador). OK
Ter o HTML. OK
Pegar o coração. OK
Pegar clique no coração. OK
Com o clique do usuário, mostrar um aviso na tela. OK

*/

const $heart = document.querySelector(".-heart");

const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClickHeart);

$stars[0].addEventListener("click", handleClickStar0);
$stars[1].addEventListener("click", handleClickStar1);
$stars[2].addEventListener("click", handleClickStar2);
$stars[3].addEventListener("click", handleClickStar3);
$stars[4].addEventListener("click", handleClickStar4);


function handleClickHeart() {
    $heart.classList.toggle('-active');
};


function handleClickStar0() {
    $stars[0].classList.toggle("-active");
};

function handleClickStar1() {
    $stars[1].classList.toggle("-active");
};

function handleClickStar2() {
    $stars[2].classList.toggle("-active");
};

function handleClickStar3() {
    $stars[3].classList.toggle("-active");
};

function handleClickStar4() {
    $stars[4].classList.toggle("-active");
};
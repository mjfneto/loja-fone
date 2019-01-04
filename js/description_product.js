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
    $heart.classList.toggle('-active');
};

const $star = document.querySelector(".-star");

$star.addEventListener("click", handleStars);

function handleStars() {
    let attrText = event.target.getAttribute("src");
    let target = event.target;
    if (attrText.includes("-active")) {
        target.removeAttribute("src");
        target.setAttribute("src", "img/star.png");
    }
    else {
        target.removeAttribute("src");
        target.setAttribute("src", "img/star-active.png");
    }
};
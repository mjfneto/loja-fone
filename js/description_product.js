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

const $starContainer = document.querySelector(".-star");

const $star = Array.prototype.slice.call(document.querySelectorAll('[src*="star"]'));

for (var icon of $star) {
    icon.addEventListener("click", handleStars);
};

function handleStars(e) {
    $star.forEach(function (item, index) {
        let targetSrcText = e.target.getAttribute("src");
        if (!targetSrcText.includes("-active")) {
            let srcText = item.getAttribute("src");
            if ((index <= $star.indexOf(e.target)) && ((!srcText.includes("-active")) || (!srcText.includes("-active")))) {
                item.setAttribute("src", "img/star-active.png");
            }
        }
        else {
            if (index > $star.indexOf(e.target)) {
                item.setAttribute("src", "img/star.png");
            }
        }
    });
};



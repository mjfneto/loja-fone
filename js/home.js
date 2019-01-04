let valorInicial = 10;
const $second = document.querySelector('.-second');

$second.addEventListener("click", handleClick);

function handleClick() {
    const $carrinho = document.querySelector(".-last");

    // valorInicial = valorInicial + 1;
    // valorInicial += 1;
    // valorInicial++;

    $carrinho.textContent = ++valorInicial;
};
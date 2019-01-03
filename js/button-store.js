
const $secondButton = document.querySelector(".-second");

$secondButton.addEventListener("click", function () {
    var cartCount = $actionLast.textContent;
    var count = cartCount[10];
    count++;
    var newCartCount = cartCount.replace(cartCount[10], count);
    $actionLast.innerHTML = newCartCount;
});
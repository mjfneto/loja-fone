const $searchBox = document.querySelector(".-searchbox");

const $searchIcons = document.querySelectorAll(".-searchbox > .icon");

$searchIcons.forEach($searchItem =>
  $searchItem.addEventListener("click", () => {
    $searchBox.classList.toggle("-active");
  })
);

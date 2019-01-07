const $menuImg = document.querySelector(".menu > img");
const $menu = document.querySelector(".menu");

$menuImg.addEventListener("click", () => {
  $menu.classList.toggle("-active");
  $menu.addEventListener("mouseleave", () => $menu.classList.remove("-active"));
});

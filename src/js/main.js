document.addEventListener("DOMContentLoaded", () => {
  const burgerMenuBtn = document.querySelector(".burger-menu-btn");
  const closeBurgerMenuBtn = document.querySelector(".close-menu-btn");
  const nav = document.querySelector(".nav");

  burgerMenuBtn.addEventListener("click", () => {
    nav.classList.add("open");
    document.querySelector("body").style.overflow = "hidden";
  });

  closeBurgerMenuBtn.addEventListener("click", () => {
    nav.classList.remove("open");
    document.querySelector("body").style.overflow = "auto";
  });
});

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
  // Sélectionne chaque accordéon sur la page HTML
  const accordions = document.querySelectorAll(".accordion");

  // Itère sur chacun des accordéons individuellement
  accordions.forEach(function (accordion) {
    // Ajoute 2 variables, la première sélectionnant le bouton de l'accordéon, la seconde sélectionnant son contenu
    const accordionBtn = accordion.querySelector(".label button");
    const accordionContent = accordion.querySelector(".content");
    const accordionArrow = accordion.querySelector(".label .arrow");

    // Ajoute un écouteur d'événement sur le bouton de l'accordion
    accordionBtn.addEventListener("click", function () {
      // Si le contenu de l'accordéon a la class "open", ça veut dire qu'au click, on veut refermer l'accordéon (-> mettre sa height à 0)
      if (accordionContent.classList.contains("open")) {
        gsap.to(accordionContent, {
          height: 0,
          duration: 1,
        });
        gsap.to(accordionArrow, {
          rotate: 0,
          duration: 0.2,
        });
        // Sinon, on veut voir le contenu
      } else {
        gsap.to(accordionContent, {
          height: "auto",
          duration: 1,
        });
        gsap.to(accordionArrow, {
          rotate: 180,
          duration: 0.2,
        });
      }
      // On vient ensuite ajouter la class open à l'accordéon
      accordionContent.classList.toggle("open");
    });
  });
});

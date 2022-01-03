/* Constantes */
const bodyElement = document.querySelector("body");
const menuToggle = document.querySelector(".hamburger-menu");
const heroElement = document.querySelector(".hero");
/**********************************/

// Au click, on ajoute la class "is-open" à la class "hamburger-menu"
menuToggle.addEventListener("click", function () {
  bodyElement.classList.toggle("is-open");
  heroElement.classList.add("is-open");
});

// Ajout de "eventListener" à l'objet "window" pour fermer la barre de menu quand on click en dehors du menu OU sur le bouton hamburger
window.addEventListener("click", function (e) {
  var clickedElement = e.target;

  if (clickedElement.matches(".is-open")) {
    bodyElement.classList.remove("is-open");
    heroElement.classList.remove("is-open");
  }
});

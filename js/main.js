// Constantes
const bodyElement = document.querySelector("body");
const menuToggle = document.querySelector(".hamburger-menu");
const heroElement = document.querySelector(".hero");
const navList = document.querySelector(".nav-list");
/**********************************/

// Au click, on ajoute la class "is-open" à la class "hamburger-menu"
menuToggle.addEventListener("click", function () {
  bodyElement.classList.toggle("is-open");
  heroElement.classList.add("is-open");
});

// Au click, on enlève la class "is-open" à la class "nav-list"
navList.addEventListener("click", function (e) {
  var clickedElement = e.target;

  if (clickedElement.classList[0] === "nav-link") {
    bodyElement.classList.remove("is-open");
  }
});

// Ajout de "eventListener" à l'objet "window" pour fermer la barre de menu quand on click en dehors du menu OU sur le bouton hamburger
window.addEventListener("click", function (e) {
  var clickedElement = e.target;

  if (clickedElement.matches(".is-open")) {
    bodyElement.classList.remove("is-open");
    heroElement.classList.remove("is-open");
  }
});

// Ajout de l'effet du bouton "load-more" : à chaque clic, + 3 projects apparaissent -> 9 projets en tout. Quand 9 projets visibles, ALORS bouton: display: none
let loadMoreBtn = document.querySelector(".load-more");

loadMoreBtn.onclick = () => {
  var projetVisible = 3;
  var gridItem = [...document.querySelectorAll(".grid-item-portfolio")];
  for (var i = projetVisible; i < projetVisible + 3; i++) {
    gridItem[i].style.display = "inline-block";
  }
  projetVisible += 3;

  if (projetVisible >= gridItem.length) {
    loadMoreBtn.style.display = "none";
  }
};

/*loadMoreBtn.addEventListener("clic", loadProjets);

function loadProjets() {
  var gridItem = [
    ...document.querySelectorAll(".container .grid .grid-item-portfolio"),
  ];
  for (var i = projetVisible; i < projetVisible + 3; i++) {
    gridItem[i].setAttribute("class", "ajoutProjets");
  }
  projetVisible += 3;

  if (projetVisible >= gridItem.length) {
    loadMoreBtn.setAttribute("class", "loadHidden");
  }
}*/

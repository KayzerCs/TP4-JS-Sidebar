// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

document.addEventListener("DOMContentLoaded", () => {
  let sidebar = document.getElementById("side-bar");
  let toggleBtn = document.getElementById("btn");
  let body = document.querySelector("body");

  toggleBtn.addEventListener("click", () => {
    let currentLeft = parseInt(window.getComputedStyle(sidebar).left, 10);
    let newLeft = currentLeft === 0 ? -230 : 0;
    sidebar.style.left = newLeft + "px";

    toggleBtn.classList.toggle("cross", newLeft === 0);
  });

  body.addEventListener("click", () => {
    if (parseInt(window.getComputedStyle(sidebar).left, 10) === 0) {
      sidebar.style.left = "-230px";
      toggleBtn.classList.remove("cross");
    }
  });
});

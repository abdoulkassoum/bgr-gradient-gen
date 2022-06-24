// prendre les elements des documents
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const random = document.querySelector(".random-button");

// utilisations de l'id
const body = document.getElementById("gradient");

// la fonction
function setGraident() {
  //  css
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  // mettre le css de background sur l'écran
  css.textContent = `${body.style.background};`;
}

// Function pour les couleurs aléatoire
function randomColor() {
  // variable des couleurs
  let color = "#"; 
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

function setRandomColor() {
  // function 
  color1.value = randomColor();
  color2.value = randomColor();
  setGraident();
}

// Chaque fois que le premier paramètre change, appelez cette fonction
color1.addEventListener("input", setGraident);

color2.addEventListener("input", setGraident);

random.addEventListener("click", setRandomColor);

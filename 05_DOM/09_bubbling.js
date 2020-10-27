const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", (e) => {
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation();
})

const value = () => {
  return Math.floor(Math.random() * 256);
}

const makeRandColor = () => {
  return `rgb(${value()}, ${value()}, ${value()}`;
}

container.addEventListener("click", (e) => {
  container.classList.toggle("hide");
})
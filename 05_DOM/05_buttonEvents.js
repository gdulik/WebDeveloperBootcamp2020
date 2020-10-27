const value = () => {
  return Math.floor(Math.random() * 256);
}

const makeRandColor = () => {
  return `rgb(${value()}, ${value()}, ${value()}`;
}

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click",() => {
    button.style.backgroundColor = makeRandColor();
    button.style.color = makeRandColor();
  })
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
  h1.addEventListener("click", colorize)
}

function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
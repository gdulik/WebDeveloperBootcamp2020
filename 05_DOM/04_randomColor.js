const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

const value = () => {
  return Math.floor(Math.random() * 256);
}

btn.addEventListener("click", () => {
  const newColor = `rgb(${value()}, ${value()}, ${value()})`;
  h1.innerText = newColor;
  document.body.style.backgroundColor = newColor;
})
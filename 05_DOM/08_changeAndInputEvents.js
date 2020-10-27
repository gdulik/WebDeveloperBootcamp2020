const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener("change",() => {
//   console.log("Change");
// })

input.addEventListener("input",(e) => {
  console.log("Input");
  h1.innerText = input.value;
  // console.log(e);
  if(input.value === ""){
    h1.innerText = "Type Below:";
  }
})
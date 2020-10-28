let scoreP1 = 0;
let scoreP2 = 0;
const scoreTextP1 = document.querySelector("#scoreTextP1");
const scoreTextP2 = document.querySelector("#scoreTextP2");
const winScore = document.querySelector("#winScore");
const btnP1 = document.querySelector("#btnP1");
const btnP2 = document.querySelector("#btnP2");
const btnRst = document.querySelector("#btnRst");

btnP1.addEventListener("click", (e) => {
  scoreP1++;
  if(scoreP1 === parseInt(winScore.value)){
    btnP1.disabled = true;
    btnP2.disabled = true;
    scoreTextP1.classList.add("has-text-success");
    scoreTextP2.classList.add("has-text-danger");
  }
  scoreTextP1.innerText = scoreP1;
})

btnP2.addEventListener("click", (e) => {
  scoreP2++;
  if(scoreP2 === parseInt(winScore.value)){
    btnP1.disabled = true;
    btnP2.disabled = true;
    scoreTextP1.classList.add("has-text-danger");
    scoreTextP2.classList.add("has-text-success");
  }
  scoreTextP2.innerText = scoreP2;
})

btnRst.addEventListener("click", rst)

winScore.addEventListener("change", rst)

function rst() {
  scoreP1 = 0;
  scoreP2 = 0;
  btnP1.disabled = false;
  btnP2.disabled = false;
  scoreTextP1.classList.remove("has-text-success", "has-text-danger");
  scoreTextP2.classList.remove("has-text-success", "has-text-danger");
  scoreTextP1.innerText = scoreP1;
  scoreTextP2.innerText = scoreP2;
}
const p1 = {
  score: 0,
  button: document.querySelector("#btnP1"),
  text: document.querySelector("#scoreTextP1")
};

const p2 = {
  score: 0,
  button: document.querySelector("#btnP2"),
  text: document.querySelector("#scoreTextP2")
};

function updateScore(player, opponent) {
  player.score++;
  if(player.score === parseInt(winScore.value)){
    player.button.disabled = true;
    opponent.button.disabled = true;
    player.text.classList.add("has-text-success");
    opponent.text.classList.add("has-text-danger");
  }
  player.text.innerText = player.score;
}

const winScore = document.querySelector("#winScore");
const btnRst = document.querySelector("#btnRst");

p1.button.addEventListener("click", () => {
  updateScore(p1,p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2,p1);
});

btnRst.addEventListener("click", rst);

winScore.addEventListener("change", rst);

function rst() {
  for(let p of [p1,p2]){
    p.score = 0;
    p.button.disabled = false;
    p.text.classList.remove("has-text-success", "has-text-danger");
    p.text.innerText = p.score;
  }
}
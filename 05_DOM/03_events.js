const btn = document.querySelector("#v2");

btn.onclick = function()
{
  console.log("You cliked me")
}

function enter() {
  console.log("Mouse enter");
}

function leave() {
  console.log("Mouse leave");
}

btn.onmouseenter = enter;
btn.onmouseleave = leave;

document.querySelector("h1").onclick = function() {
  alert("You clicked H1");
}

const btn2 = document.querySelector("#v3");

btn2.addEventListener("click", () => {
  alert("You clicked the button")
})

btn2.addEventListener("mouseup", () => {
  alert("You moused up the button")
})

function twist() {
  console.log("Twist")
}
function shout() {
  console.log("Shout")
}

const tasButton = document.querySelector("#tas");
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener("click", twist, {once: true});
tasButton.addEventListener("click", shout);
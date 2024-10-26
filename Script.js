let button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const question = document.querySelector(".question");

button1.addEventListener("click", click);
button2.addEventListener(
  (onmouseover = "moveButton()"),
  (onclick = "moveButton()")
);

function click() {
  question.innerHTML = "Love You Too :)";
}
function moveButton() {
  let x =
    Math.random() *
      (window.innerWidth - document.getElementById("noButton").offsetWidth) -
    85;
  let y =
    Math.random() *
      (window.innerHeight - document.getElementById("noButton").offsetHeight) -
    48;
  document.getElementById("noButton").style.left = `${x}px`;
  document.getElementById("noButton").style.top = `${y}px`;
}

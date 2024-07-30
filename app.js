let btn = document.querySelector(".btn");
let circleOne = document.querySelectorAll(".circle-p1");
let circleTwo = document.querySelectorAll(".circle-p2");
let circleThree = document.querySelector(".circle-p1__three");
let circleP2Three = document.querySelector(".circle-p2__three");
let midOne = document.querySelector(".mid-one");
let midTwo = document.querySelector(".mid-two");
let scoreUpdate = document.querySelector(".score-update__text");

let dice = [circleOne, circleTwo];

// Reset

function reset() {
  dice.forEach((die) => {
    die.forEach((e) => removeClass(e, "red", "hidden"));
  });
  btn.innerHTML = "Play";
}

// Remove class
function removeClass(elements, ...classes) {
  elements.classList.remove(...classes);
}

// ***************************** Dice function //

function player(die, circle, mid) {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  switch (randomNum) {
    case 1:
      circle.classList.add("red", "hidden");
      for (let i = 0; i < die.length; i++) {
        if (i !== 3) {
          die[i].classList.add("red");
        }
      }
      break;

    case 2:
      for (let i = 0; i < die.length; i++) {
        if (i !== 0 && i !== 5) {
          die[i].classList.add("red");
        }
      }
      break;

    case 3:
      for (let i = 0; i < die.length; i++) {
        if (i !== 0 && i !== 5) {
          if (i !== 3) {
            die[i].classList.add("red");
          }
        }
      }
      circle.classList.add("hidden");
      break;
    case 4:
      let children = mid.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.add("red");
      }
      break;

    case 5:
      circle.classList.add("red", "hidden");
      break;

    case 6:
      for (let i = 0; i < die.length; i++) {
        die[i].classList.remove("red", "hidden");
      }
      break;
  }
  return randomNum;
}

const p1 = () => player(circleOne, circleThree, midOne);
const p2 = () => player(circleTwo, circleP2Three, midTwo);

btn.addEventListener("click", () => {
  reset();
  let p1Score = p1();
  let p2Score = p2();
  scoreUpdate.textContent =
    p1Score > p2Score
      ? "Player 1 wins"
      : p1Score < p2Score
      ? "Player 2 wins"
      : "It's a tie!";
});

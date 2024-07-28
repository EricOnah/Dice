let btn = document.querySelector(".btn");
let circleOne = document.querySelectorAll(".circle-p1");
let circleTwo = document.querySelectorAll(".circle-p2");
let circleThree = document.querySelector(".circle-p1__three");
let circleP2Three = document.querySelector(".circle-p2__three");
let midOne = document.querySelector(".mid-one");
let midTwo = document.querySelector(".mid-two");
let scoreUpdate = document.querySelector(".score-update__text");
function reset() {
  for (let i = 0; i < circleOne.length; i++) {
    circleOne[i].classList.remove("red", "hidden");
    circleTwo[i].classList.remove("red", "hidden");
    btn.innerHTML = "Play";
  }
}

let p1 = function () {
  let randomNum = Math.floor(Math.random() * 6) + 1;

  if (randomNum === 1) {
    circleThree.classList.add("red", "hidden");
    for (let i = 0; i < circleOne.length; i++) {
      if (i !== 3) {
        circleOne[i].classList.add("red");
      }
    }
  } else if (randomNum === 2) {
    for (let i = 0; i < circleOne.length; i++) {
      if (i !== 0 && i !== 5) {
        circleOne[i].classList.add("red");
      }
    }
  } else if (randomNum === 3) {
    for (let i = 0; i < circleOne.length; i++) {
      if (i !== 0 && i !== 5) {
        if (i !== 3) {
          circleOne[i].classList.add("red");
        }
      }
    }
    circleThree.classList.add("hidden");
  } else if (randomNum === 4) {
    let children = midOne.children;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.add("red");
    }
  } else if (randomNum === 5) {
    circleThree.classList.add("red", "hidden");
  } else if (randomNum === 6) {
    for (let i = 0; i < circleOne.length; i++) {
      circleOne[i].classList.remove("red", "hidden");
    }
  }
  return randomNum;
};

let p2 = function () {
  let randomNum = Math.floor(Math.random() * 6) + 1;

  if (randomNum === 1) {
    circleP2Three.classList.add("red", "hidden");
    for (let i = 0; i < circleTwo.length; i++) {
      if (i !== 3) {
        circleTwo[i].classList.add("red");
      }
    }
  } else if (randomNum === 2) {
    for (let i = 0; i < circleTwo.length; i++) {
      if (i !== 0 && i !== 5) {
        circleTwo[i].classList.add("red");
      }
    }
  } else if (randomNum === 3) {
    for (let i = 0; i < circleTwo.length; i++) {
      if (i !== 0 && i !== 5) {
        if (i !== 3) {
          circleTwo[i].classList.add("red");
        }
      }
    }
    circleP2Three.classList.add("hidden");
  } else if (randomNum === 4) {
    let children = midTwo.children;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.add("red");
    }
  } else if (randomNum === 5) {
    circleP2Three.classList.add("red", "hidden");
  } else if (randomNum === 6) {
    for (let i = 0; i < circleTwo.length; i++) {
      circleTwo[i].classList.remove("red", "hidden");
    }
  }
  return randomNum;
};
btn.addEventListener("click", () => {
  reset();
  let p1Score = p1();
  let p2Score = p2();
  if (p1Score < p2Score) {
    scoreUpdate.innerHTML = "Player 2 wins";
  } else if (p1Score == p2Score) {
    scoreUpdate.innerHTML = "Draw! Play again";
  } else {
    scoreUpdate.innerHTML = "Player 1 wins";
  }
  console.log(p1Score, p2Score);
});

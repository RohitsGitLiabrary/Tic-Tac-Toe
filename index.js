let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");
let cell8 = document.getElementById("cell8");
let cell9 = document.getElementById("cell9");
let resetGameBtn = document.getElementById("resetGame");
let winnAnnounce = document.getElementsByClassName("winnerStats");

let cellArr = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];

let currentplr = "❌";
function playGame() {
  cellArr.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.textContent === "") {
        if (currentplr === "❌") {
          cell.textContent = "❌";
          currentplr = "⭕";
          checkWin();
        } else if (currentplr === "⭕") {
          cell.textContent = "⭕";
          currentplr = "❌";
          checkWin();
        }
      }
    });
  });
}
playGame();
function checkWin() {
  let win = false;
  if (
    cell1.textContent !== "" &&
    cell2.textContent !== "" &&
    cell3.textContent !== ""
  ) {
    if (
      cell1.textContent == cell2.textContent &&
      cell2.textContent == cell3.textContent
    ) {
      document.querySelector(
        ".winnerStats"
      ).textContent = `Player ${cell1.textContent} Won`;
      win = true;
    }
  }
  if (
    cell4.textContent !== "" &&
    cell5.textContent !== "" &&
    cell6.textContent !== ""
  ) {
    if (
      cell4.textContent == cell5.textContent &&
      cell5.textContent == cell6.textContent
    ) {
      document.querySelector(
        ".winnerStats"
      ).innerHTML = `Player ${cell4.textContent} Won`;
      win = true;
    }
  }
  if (
    cell7.textContent !== "" &&
    cell8.textContent !== "" &&
    cell9.textContent !== ""
  ) {
    if (
      cell7.textContent == cell8.textContent &&
      cell8.textContent == cell9.textContent
    ) {
      document.querySelector(
        ".winnerStats"
      ).innerHTML = `Player ${cell7.textContent} Won`;
      win = true;
    }
  }
  if (
    cell1.textContent !== "" &&
    cell4.textContent !== "" &&
    cell7.textContent !== ""
  ) {
    if (
      cell1.textContent == cell4.textContent &&
      cell4.textContent == cell7.textContent
    ) {
      document.querySelector(
        ".winnerStats"
      ).innerHTML = `Player ${cell1.textContent} Won`;
      win = true;
    }
  }
  if (
    cell2.textContent !== "" &&
    cell5.textContent !== "" &&
    cell8.textContent !== ""
  ) {
    if (
      cell2.textContent == cell5.textContent &&
      cell5.textContent == cell8.textContent
    ) {
      document.querySelector(
        ".winnerStats"
      ).innerHTML = `Player ${cell2.textContent} Won`;
      win = true;
    }
  }
  if (
    cell3.textContent !== "" &&
    cell6.textContent !== "" &&
    cell9.textContent !== ""
  ) {
    if (
      cell3.textContent == cell6.textContent &&
      cell6.textContent == cell9.textContent
    ) {
      document.querySelector(
        ".winnerStats"
      ).innerHTML = `Player ${cell6.textContent} Won`;
      win = true;
    }
  }
  if (
    cell1.textContent !== "" &&
    cell5.textContent !== "" &&
    cell9.textContent !== ""
  ) {
    if (
      cell1.textContent == cell5.textContent &&
      cell5.textContent == cell9.textContent
    ) {
      document.querySelector(
        ".winnerStats"
      ).innerHTML = `Player ${cell1.textContent} Won`;
      win = true;
    }
  }
  if (
    cell3.textContent !== "" &&
    cell5.textContent !== "" &&
    cell7.textContent !== ""
  ) {
    if (
      cell3.textContent == cell5.textContent &&
      cell5.textContent == cell7.textContent
    ) {
      document.querySelector(
        ".winnerStats"
      ).innerHTML = `Player ${cell3.textContent} Won`;
      win = true;
    }
  }
  if (win == true) {
    resetGameBtn.textContent = "New Game";
    celebration();
  }
}

function resetGame() {
  cellArr.forEach((cell) => {
    cell.textContent = "";
  });
  resetGameBtn.textContent = "Reset";
  document.querySelector(".winnerStats").innerHTML = "";
}

function celebration() {
  const duration = 5 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

// Object with name 'score' and 3 properties
let score = {
  wins: 0,
  loss: 0,
  tie: 0,
};

updateScore();

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.wins} Loss:${score.loss} Ties:${score.tie}`;
}

function playGame(playerMove) {
  const computerMove = picComputerMove();
  let result = "";
  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You Win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else if (computerMove === "Scissors") {
      result = "You Win.";
    }
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.loss += 1;
  } else if (result == "Tie.") {
    score.tie += 1;
  }

  // localStorage.setItem('score', JSON.stringify(score));

  updateScore();
  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(".js-move").innerHTML = `You
    <img src="${playerMove}.jpeg" height="100" class="move-icon">
    <img src="${computerMove}.jpeg" height="100" class="move-icon">
    Computer`;

  //alert(`You picked ${playerMove}. Computer picked  ${computerMove}. ${result} \n Wins:${score.wins} Loss:${score.loss} Ties:${score.tie}`);
}

let computerMove = "";
function picComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if ((randomNumber >= 1 / 3) & (randomNumber < 2 / 3)) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

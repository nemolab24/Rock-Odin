function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissor"];
  let randomOption = Math.floor(Math.random() * 3);
  return options[randomOption];
}

function playRound(player, computer) {
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  let options = ["rock", "paper", "scissor"];
  player = options.indexOf(player);
  computer = options.indexOf(computer);
  if (computer == 0) {
    if (player == 0) {
      return 0;
    } else if (player == 1) {
      return 1;
    } else {
      return -1;
    }
  } else if (computer == 1) {
    if (player == 0) {
      return -1;
    } else if (player == 1) {
      return 0;
    } else {
      return 1;
    }
  } else {
    if (player == 0) {
      return 1;
    } else if (player == 1) {
      return -1;
    } else {
      return 0;
    }
  }
}

const buttons = document.querySelectorAll(".playerSide > button");
const computerName = document.querySelector(".computerChoice");
const scoreName = document.querySelector(".score");
const winnerName = document.querySelector(".winner");
let counter = 0;
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let computer = getComputerChoice();
    let round = playRound(button.textContent, computer);
    computerName.textContent = computer;
    if (round == 1) {
      playerScore++;
    } else if (round == -1) {
      computerScore++;
    }
    scoreName.textContent = `${playerScore} - ${computerScore}`;
    counter++;
    if (counter >= 5) {
      if (playerScore > computerScore) {
        winnerName.textContent = " You have Won the game, Congratulations!";
      } else {
        winnerName.textContent =
          "You have lost the game, better luck next time!";
      }
      playerScore = 0;
      computerScore = 0;
      counter = 0;
    } else {
      winnerName.textContent = "";
    }
  });
});

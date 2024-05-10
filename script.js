const options = document.querySelectorAll(".options-btn button");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");
const userWins = document.getElementById("userWins");
const computerWins = document.getElementById("computerWins");

let userWinCount = 0;
let computerWinCount = 0;
let roundsPlayed = 0;

options.forEach((button) => {
  button.addEventListener("click", () => {
    roundsPlayed++;

    playerChoice.src = button.dataset.image;
    const computerSelection = getComputerChoice();
    computerChoice.src = computerSelection.image;
    const winner = determineWinner(
      button.dataset.choice,
      computerSelection.choice
    );
    result.textContent = winner;

    if (winner.includes("You win!")) {
      userWinCount++;
    } else if (winner.includes("You lose!")) {
      computerWinCount++;
    }

    userWins.textContent = `You:  ${userWinCount}`;

    computerWins.textContent = `Computer: ${computerWinCount}`;

    function myFunction() {
      var x = document.getElementById("snack");

      x.className = "show";

      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    }
    if (roundsPlayed === 5) {
      const popupMessage = `Game Over! User Wins: ${userWinCount}, Computer Wins: ${computerWinCount}.`;
      const reset=document.getElementById('snack').innerText=popupMessage;
      
      myFunction(popupMessage);
      //  alert(popupMessage);
      userWinCount = 0;
      computerWinCount = 0;
      roundsPlayed = 0;
      playerChoice.src = "";
      computerChoice.src = "";
      result.textContent = "";
      userWins.textContent = `You: 0`;
      computerWins.textContent = `Computer: 0`;
    }
  });
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[randomNumber];
  return {
    choice: computerSelection,
    image: `images/${computerSelection}.png`,
  };
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
}

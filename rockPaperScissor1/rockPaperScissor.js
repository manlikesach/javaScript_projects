// 1. Define a function to randomly return 'rock', 'paper', or 'scissors' for the computer.
function computerChoice() {
  const random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// 2. Define a function to get the human player's choice using prompt with validation.
function humanChoice(round, previousResult) {
  if (previousResult) {
    alert(`Previous Round Result:\n${previousResult}`);
  }

  let choice;
  do {
    choice = prompt(`Round ${round}:\nEnter rock, paper, or scissors:`)
      .trim()
      .toLowerCase();
  } while (!["rock", "paper", "scissors"].includes(choice));

  return choice;
}

// 3. Create global variables to track scores.
let computerScore = 0;
let humanScore = 0;

// 4. Define playRound function that returns the result as a string.
function playRound(human, computer) {
  if (human === computer) {
    return `It's a draw! You both chose ${human}`;
  } else if (
    (human === "paper" && computer === "rock") ||
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanScore++;
    return `You win! ${human} beats ${computer}`;
  } else {
    computerScore++;
    return `Computer wins! ${computer} beats ${human}`;
  }
}

// 5. Define playGame function to handle 5 rounds.
function playGame() {
  computerScore = 0;
  humanScore = 0;
  let previousResult = "";

  for (let i = 0; i < 5; i++) {
    const human = humanChoice(i + 1, previousResult);
    const computer = computerChoice();
    const result = playRound(human, computer);
    previousResult = result;
  }

  // Final result
  let finalResult = `Final Score:\nYou: ${humanScore} | Computer: ${computerScore}\n`;

  if (humanScore > computerScore) {
    finalResult += "You win the game!";
  } else if (computerScore > humanScore) {
    finalResult += "Computer wins the game!";
  } else {
    finalResult += "It's a draw!";
  }

  alert(finalResult);
  console.log(finalResult);
}

// 6. Start the game.
playGame();

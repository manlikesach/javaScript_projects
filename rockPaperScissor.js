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

function humanChoice() {
  const choice = prompt("Enter either rock, paper or scissors!");
  return choice;
}

console.log(humanChoice());

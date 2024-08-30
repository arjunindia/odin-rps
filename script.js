let table = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};
const getHumanChoice = () => {
  return window.prompt("Enter your choice").trim().toLowerCase();
};

const getComputerChoice = () => {
  return Object.keys(table)[Math.floor(Math.random() * 3)];
};

const playRound = (humanChoice, computerChoice) => {
  if (!Object.keys(table).includes(humanChoice)) {
    return `Invalid choice, please enter Rock, Paper or Scissors!`;
  }
  if (humanChoice === computerChoice) {
    return `Both you and computer chose ${humanChoice}, so \n It's a Tie!`;
  }
  if (table[humanChoice] === computerChoice) {
    return `Computer chose ${computerChoice}, so \n You Lose!`;
  }

  return `Computer chose ${computerChoice}, so \n You Win!`;
};

document.querySelector("button").onclick = () =>
  alert(playRound(getHumanChoice(), getComputerChoice()));

let playerScore = 0;
let computerScore = 0;

getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

getHumanChoice = () => {
    // let humanChoice = parseInt(prompt("1: Rock\n2: Paper\n3: Scissors"));
    let humanSelection = prompt("Make your decision:\nRock\nPaper\nScissors")
    if (humanChoice === 1) {
        humanChoice = "rock";
    } else if (humanChoice === 2) {
        humanChoice = "paper";
    } else {
        humanChoice = "scissors";
    }
    return humanChoice;
}

playRound = (human, computer) => {

}

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice())
}
console.log("Human: " + getHumanChoice());
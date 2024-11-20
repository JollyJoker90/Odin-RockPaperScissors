let playerScore = 0;
let computerScore = 0;

capitalize = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str)
}

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
    let humanSelection = prompt("Make your decision:\nRock\nPaper\nScissors");
    humanSelection = humanSelection.toLocaleLowerCase();
    // if (humanSelection === 1) {
    //     humanSelection = "rock";
    // } else if (humanSelection === 2) {
    //     humanSelection = "paper";
    // } else {
    //     humanChoice = "scissors";
    // }
    return humanSelection;
}

playRound = (human, computer) => {

}

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice())
}
console.log("Human: " + getHumanChoice());
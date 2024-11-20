let playerScore = 0;
let computerScore = 0;

capitalize = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase();
}

getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

getHumanChoice = () => {
    let humanSelection = capitalize(prompt("Make your decision:\nRock\nPaper\nScissors"));

    return humanSelection;
}

playRound = (human, computer) => {

}

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice())
}
console.log("Human: " + getHumanChoice());
console.log(capitalize("aTEST"))
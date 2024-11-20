let playerScore = 0;
let computerScore = 0;

capitalize = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1).toLowerCase();
}

getComputerChoice = () => {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "Rock";
    } else if (computerSelection === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

getHumanChoice = () => {
    let humanSelection = capitalize(prompt("Make your decision:\nRock\nPaper\nScissors"));
    if (!["Rock", "Paper", "Scissors"].includes(humanSelection)) {
        alert("Wrong input..");
        getHumanChoice()
    }
    return humanSelection;
}

playRound = (human, computer) => {
    if (human === computer) {
        return
    } else if ((human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")) {
        playerScore++;
    } else if ((human === "Paper" && computer === "Scissors") ||
        (human === "Scissors" && computer === "Rock") ||
        (human === "Rock" && computer === "Paper")) {
        computerScore++;
    }
    console.log(human, computer, playerScore, computerScore);
}

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice())
}

playRound(getHumanChoice(), getComputerChoice());
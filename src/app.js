
const choices = ["rock", "paper", "scissors", "lizard", "spock"];


const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
};


const jugar = (userChoice) => {

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(`Mi eleccion: ${userChoice}`);
    console.log(`Elección de la computadora: ${computerChoice}`);

    if (userChoice === computerChoice) return "Empate";

    if (rules[userChoice].includes(computerChoice)) return "Ganaste";

    return "Perdiste";
};

const userSelection = "rock";
const result = jugar(userSelection);
console.log(result);
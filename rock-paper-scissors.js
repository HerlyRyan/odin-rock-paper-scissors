let humanScore = 0;
let computerScore = 0;
let drawTimes = 0;

function getHumanChoice(choice) {
	let result;
	if (choice === 1) {
		result = "Rock";
	} else if (choice === 2) {
		result = "Paper";
	} else if (choice === 3) {
		result = "Scissors";
	} else {
		result = "";
	}

	return result;
}

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3 + 1);
	let result;

	if (choice === 1) {
		result = "Rock";
	} else if (choice === 2) {
		result = "Paper";
	} else if (choice === 3) {
		result = "Scissors";
	} else {
		result = "";
	}

	return result;
}

function playRound(humanChoice, computerChoice) {
	const human = humanChoice.toLowerCase();
	const computer = computerChoice.toLowerCase();

	if (human === "rock" && computer === "scissors") {
		humanScore += 1;
		console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
	} else if (human === "rock" && computer === "paper") {
		computerScore += 1;
		console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
	} else if (human === "scissors" && computer === "paper") {
		humanScore += 1;
		console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
	} else if (human === "scissors" && computer === "rock") {
		computerScore += 1;
		console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
	} else if (human === "paper" && computer === "rock") {
		humanScore += 1;
		console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
	} else if (human === "paper" && computer === "scissors") {
		computerScore += 1;
		console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
	} else {
		drawTimes += 1;
		console.log("Draw");
	}
}

function playGame(game) {
	for (let i = 0; i < game; i++) {
		const answerChoice = prompt("What is your choice: ");
		const humanChoice = getHumanChoice(Number(answerChoice));
		const computerChoice = getComputerChoice();
		playRound(humanChoice, computerChoice);
	}
}

playGame(5);

if (humanScore > computerScore) {
	console.log(
		`Human Wins with score: ${humanScore} than ${computerScore} computerScore and draw times: ${drawTimes}`,
	);
} else {
	console.log(
		`Computer Wins with score: ${computerScore} than ${humanScore} humanScore and draw times: ${drawTimes}`,
	);
}

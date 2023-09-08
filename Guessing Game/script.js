let secretNumber = generateRandomNumber();
let attempts = 0;
let isGameWon = false;

const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuess');
const message = document.querySelector('.message');
const attemptsCount = document.getElementById('attemptsCount');
const playAgainButton = document.getElementById('playAgain');

submitGuessButton.addEventListener('click', checkGuess);
playAgainButton.addEventListener('click', resetGame);

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    if (isGameWon) return;

    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        showMessage("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        isGameWon = true;
        showMessage(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
        playAgainButton.style.display = 'block';
    } else if (userGuess < secretNumber) {
        showMessage("Too low. Try again!");
    } else {
        showMessage("Too high. Try again!");
    }

    attemptsCount.textContent = attempts;
}

function showMessage(msg) {
    message.textContent = msg;
}

function resetGame() {
    secretNumber = generateRandomNumber();
    attempts = 0;
    isGameWon = false;

    guessInput.value = '';
    message.textContent = '';
    attemptsCount.textContent = '0';
    playAgainButton.style.display = 'none';
}

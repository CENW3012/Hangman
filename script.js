const words = ["python", "github", "hangman", "javascript", "computer", "science"];
let word = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let wrongLetters = [];
let attempts = 6;

const wordDisplay = document.getElementById("wordDisplay");
const wrongLettersDisplay = document.getElementById("wrongLetters");
const attemptsDisplay = document.getElementById("attempts");
const message = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");

function updateDisplay() {
  let displayWord = word
    .split("")
    .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  wordDisplay.textContent = displayWord;
  wrongLettersDisplay.textContent = wrongLetters.join(", ");
  attemptsDisplay.textContent = attempts;

  if (!displayWord.includes("_")) {
    message.textContent = "🎉 You won!";
    guessBtn.disabled = true;
  } else if (attempts <= 0) {
    message.textContent = `💀 You lost! The word was "${word}".`;
    guessBtn.disabled = true;
  }
}

guessBtn.addEventListener("click", () => {
  const guess = guessInput.value.toLowerCase();
  guessInput.value = "";

  if (!guess || !/^[a-z]$/.test(guess)) {
    alert("Please enter a single letter!");
    return;
  }

  if (guessedLetters.includes(guess) || wrongLetters.includes(guess)) {
    alert("You already guessed that letter!");
    return;
  }

  if (word.includes(guess)) {
    guessedLetters.push(guess);
  } else {
    wrongLetters.push(guess);
    attempts--;
  }

  updateDisplay();
});

updateDisplay();

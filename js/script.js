

const guessedLettersElement = document.querySelector(".guessed-letters");
const theButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const emptyParagraph = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again hide");
const word = "Magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("☀️");
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
  };

  placeholder(word);
guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
});


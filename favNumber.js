const readline = require('readline');

// Step 1: Set up the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 2: Declare the favorite number
const theFavNumber = 42;

// Function to prompt the user and handle the guess
function guessNumber() {
  rl.question("Guess the favorite number: ", (input) => {
    const guess = parseInt(input);

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
    } else if (guess > theFavNumber) {
      console.log("Too high!");
      guessNumber();
    } else if (guess < theFavNumber) {
      console.log("Too low!");
      guessNumber();
    } else {
      console.log("Correct! You guessed the favorite number.");
      rl.close(); // Close the interface when the guess is correct
    }
  });
}

// Start the game
guessNumber();

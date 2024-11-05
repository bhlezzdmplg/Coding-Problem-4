let favNumber = 24;

let guess = parseInt(prompt("Guess my favorite number: "));

while (guess !== favNumber) {
  if (guess > favNumber) {
    alert("Too high!");
  } else {
    alert("Too low!");
  }
  guess = parseInt(prompt("Guess again: "));
}

alert("Correct!");


function checkGuess() {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Get the user's guess from the input field
    const userGuess = document.getElementById('guess').value;

    // Check if the guess is correct
    if (userGuess == randomNumber) {
        document.getElementById('result').innerText = 'Congratulations! You guessed the right number!';
    } else {
        document.getElementById('result').innerText = 'Try again! The correct number was ' + randomNumber;
    }
}
function checkGuess() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Get the user's guess from the input field
    const userGuess = document.getElementById('guess').value;

    // Check if the guess is correct
    if (userGuess == randomNumber) {
        document.getElementById('result').innerText = 'WOOOOO YOU DID ITTTT!! You guessed the right number!';
    } else {
        document.getElementById('result').innerText = 'You stink at this! The correct number was ' + randomNumber;
    }
}
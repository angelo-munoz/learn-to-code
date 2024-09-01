# Create a Number Guessing Game
How good of a guesser are you? Let's make a number guessing game you can share with your family and friends! 

In this tutorial, we'll use `HTML` and `javascript` for our number game. We will: 
1. Create an `HTML` file for the game screen
2. Add `javascript` for the game logic
3. Enjoy our new game in a web browser (Chrome, Edge, etc)
4. (optional) Make it better! 

Let's dive in! 
## Setup
This is the step to set up your computer. If you already have VSCode installed, you can skip this step and go straight to step 1. 

### Install VSCode
VSCode is a code editor we will use in our tutorials. If you are worried about writing code, don't worry, the code we will write is easy-to-use and we'll work it together so you can make awesome apps. I'm with you. We can do this! 

To install VSCode, follow the steps below. 
1. Go to [code.visualstudio.com/](https://code.visualstudio.com/)
2. Choose the `Download` button
3. When the file downloads, click (or double-click) on it to start to install it on your computer. Once it's installed, we can use it in our tutorials. 
4. Follow the instructions on the VSCode screen. Most times, choosing the `Next` button on each screen will install VSCode just fine. 
5. Once it's installed, you will see a new icon on your computer, and clicking (or double-clicking) on it will open VSCode. 
6. All done! You're ready for our tutorials! 

## Step 1: Create the HTML File

First, let's create an HTML file. This will be the screen (or webpage or user-interface).

1. Open a text editor (like VSCode or notepad).
2. Open a new file. On the top left menu, choose `File` > `New Text File`

*Pro tip*: Press and hold `Ctrl` and then press `n` on your keyboard to make a new file

3. Save the file as `index.html`. On the left menu, choose `File` > `Save`. This also works to save your work as you add to your file.

*Pro tip*: Press and hold `Ctrl` and then press `s` on your keyboard to save your file.  

4. In the prompt that opens, type `index.html` then press the `Save` button. 

5. Now, you're ready to add the `HTML` code. Copy and paste the following code into your `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">    
    <title>Number Guessing Game</title>
</head>
<body>
    <h1>Guess the Number Game</h1>
    <p>Guess a number between 1 and 10:</p>
    <input type="number" id="guess" min="1" max="10">
    <button onclick="checkGuess()">Guess</button>
    <p id="result"></p>

    <script src="script.js"></script>
</body>
</html>
```

## Step 2: Create the JavaScript File

Next, we'll create a JavaScript file to add the game logic.

1. In the same folder as your `index.html` file, create a new file and name it `script.js`.

Copy and paste the following code into your `script.js` file:

```javascript

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
```

## Step 3: Open Your Game in a Browser

1. Open the folder where you saved `index.html` and `script.js`.
2. Double-click on `index.html` to open it in your web browser.

Now you have a simple number guessing game! 🎉

## Step 4: Make it better!
How can we make this better? Here are some ideas: 

### 1. Change it to guess from 1 to 100. 

*Hint*: Look at this line in the `script.js` file. Remember to Save after making the change. Refresh the browser window to reload your app after making a change. 
```javascript
    const randomNumber = Math.floor(Math.random() * 10) + 1;
```

### 2. Add background color to the page. 

Add this code to your html file just below the `</head>` tag. 
```html
<style>
    body 
    {
        background-color:gray;
    }
</style>
```

### 4. Make your app work on a phone. 
Add this line to your `HTML` file inside the `<head>` section: 
```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## How did it turn out? 
## What do you think about coding? 
## What do you want to learn next? 

---

Feel free to ask if you have any questions or need further assistance!

Source: Conversation with Copilot, 9/1/2024
(1) github.com. https://github.com/sagnikghoshcr7/Three.js/tree/e306e5900993f46629c9c9d856f911b2785e4f24/03-basic-scene%2FREADME.md.
(2) github.com. https://github.com/Densitty/playing_with_php/tree/9f121d3bd4abcb058f775715bd91b69ada7a2c3f/2_Control_Structures_&_Superglobals%2F7_guess_number.php.
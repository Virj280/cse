var secretNumber = 0;
var secretSet = false;
var attempts = 0;

function handleGameLogic() {
    var inputElement = document.getElementById("secretNum");
    var feedbackElement = document.getElementById("feedback");
    var userInputValue = Number(inputElement.value);

    if (!secretSet) {
        if (inputElement.value !== "" && userInputValue >= 1 && userInputValue <= 100) {
            secretNumber = userInputValue;
            secretSet = true;
            attempts = 0;

            document.getElementById("helplabel").innerText = "Player 2: Try to Guess (1 - 100)";
            inputElement.placeholder = "Enter your guess";
            feedbackElement.innerText = "Secret number locked in! Player 2's turn.";
        } else {
            feedbackElement.innerText = "Please enter a valid number between 1 and 100!";
        }
    } else {
        if (inputElement.value === "") {
            feedbackElement.innerText = "Please enter a guess!";
            return;
        }

        attempts++;

        if (userInputValue === secretNumber) {
            alert("VICTORY!!!!!!!!!! You guessed " + secretNumber + " in " + attempts + " attempt(s)!");
            resetGame();
            return;
        } else if (userInputValue < secretNumber) {
            feedbackElement.innerText = "Attempt #" + attempts + ": " + userInputValue + " is TOO LOW!!";
        } else {
            feedbackElement.innerText = "Attempt #" + attempts + ": " + userInputValue + " is TOO HIGH!!";
        }
    }

    inputElement.value = "";
    inputElement.focus();
}

function resetGame() {
    secretSet = false;
    secretNumber = 0;
    attempts = 0;
    document.getElementById("helplabel").innerText = "Set Secret Number (1 - 100)";
    document.getElementById("secretNum").placeholder = "Enter a Number";
    document.getElementById("secretNum").value = "";
    document.getElementById("feedback").innerText = "";
}
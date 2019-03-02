

// Variables for
var targetNumber = 0;
var redGemRandomNumber;
var blueGemRandomNumber;
var yellowGemRandomNumber;
var greenGemRandomNumber;
var currentScore = 0;
var wins = 0;
var losses = 0;

// Storing the ID from HTML in JS
var resultText = document.getElementById("result");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var currentScoreText = document.getElementById("current-score");


// Start game and reset game function
function startGame() {
    
    targetNumber = Math.floor(Math.random() * 100) + 19;
    $("#random-number").text(targetNumber);
    redGemRandomNumber = Math.floor(Math.random() * 12) + 1;
    blueGemRandomNumber = Math.floor(Math.random() * 12) + 1;
    yellowGemRandomNumber = Math.floor(Math.random() * 12) + 1;
    greenGemRandomNumber = Math.floor(Math.random() * 12) + 1;
    currentScoreText.textContent = "0";
    wins;
    losses;

}

// Placeholder text
winsText.textContent = "wins: 0";
lossesText.textContent = "Losses: 0";
currentScoreText.textContent = "0";



// Start of game
startGame(); {

// Red Gem
$("#red-gem").on("click", function () {

    // keeps tract of running score + the gem value on click
    currentScore = currentScore + redGemRandomNumber;
    $("#current-score").text(currentScore)

    //if the target number is = to currentScore, add to wins, alert and restart game
    if (currentScore === targetNumber) {
        currentScore = 0;
        wins++;
        alert("you win");
        startGame();

    // if the currentScore is more than target number, add loss, alert and restart
    } else if (currentScore >= targetNumber) {
        alert("You lose!!");
        currentScore = 0;
        losses++;
        startGame();
    }
    // text displaying the wins, losses
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
});

// above code repeats for each gem

// Blue Gem
$("#blue-gem").on("click", function () {
    currentScore = currentScore + blueGemRandomNumber;

    $("#current-score").text(currentScore)
    if (currentScore === targetNumber) {
        alert("you win");
        currentScore = 0;
        wins++;
        startGame();

    } else if (currentScore >= targetNumber) {
        alert("You lose!!");
        currentScore = 0;
        losses++;
        startGame();
    }
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
});

// Yellow Gem
$("#yellow-gem").on("click", function () {
    currentScore = currentScore + yellowGemRandomNumber;

    $("#current-score").text(currentScore)
    if (currentScore === targetNumber) {
        alert("You Win!");
        currentScore = 0;
        wins++;
        startGame();

    } else if (currentScore >= targetNumber) {
        alert("You lose!!");
        currentScore = 0;
        losses++;
        startGame();
    }
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
});

// Green Gem
$("#green-gem").on("click", function () {
    currentScore = currentScore + redGemRandomNumber;

    $("#current-score").text(currentScore)
    if (currentScore === targetNumber) {
        alert("you win");
        currentScore = 0;
        wins++;
        startGame();

    } else if (currentScore >= targetNumber) {
        alert("You lose!!");
        currentScore = 0;
        losses++;
        startGame();
      }
    resultText.text = "Results: ";
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
});


}
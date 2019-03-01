

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
var resultText = document.getElementById("result")
var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")


// Start game and reset game function
function startGame() {
    
    targetNumber = Math.floor(Math.random() * 100) + 19;
    $("#random-number").text(targetNumber);
    redGemRandomNumber = Math.floor(Math.random() * 12) + 1;
    blueGemRandomNumber = Math.floor(Math.random() * 12) + 1;
    yellowGemRandomNumber = Math.floor(Math.random() * 12) + 1;
    greenGemRandomNumber = Math.floor(Math.random() * 12) + 1;
    wins;
    losses;

    winsText.textContent = "wins: " + wins;
}


// Start of game
startGame();

// Red Gem
$("#red-gem").on("click", function () {
    currentScore = currentScore + redGemRandomNumber;

    $("#current-score").text(currentScore)
    if (currentScore === targetNumber) {
        currentScore = 0;
        alert("you win");
        startGame();

    } else if (currentScore >= targetNumber) {
        alert("You lose!!");
        currentScore = 0;
        startGame();
    }
});


// Blue Gem
$("#blue-gem").on("click", function () {
    currentScore = currentScore + blueGemRandomNumber;

    $("#current-score").text(currentScore)
    if (currentScore === targetNumber) {
        alert("you win");
        currentScore = 0;
        startGame();

    } else if (currentScore >= targetNumber) {
        alert("You lose!!");
        currentScore = 0;
        startGame();
    }
});

// Yellow Gem
$("#yellow-gem").on("click", function () {
    currentScore = currentScore + yellowGemRandomNumber;

    $("#current-score").text(currentScore)
    if (currentScore === targetNumber) {
        alert("You Win!");
        currentScore = 0;
        startGame();

    } else if (currentScore >= targetNumber) {
        alert("You lose!!");
        currentScore = 0;
        startGame();
    }
});

// Green Gem
$("#green-gem").on("click", function () {
    currentScore = currentScore + redGemRandomNumber;

    $("#current-score").text(currentScore)
    if (currentScore === targetNumber) {
        alert("you win");
        currentScore = 0;
        startGame();

    } else if (currentScore >= targetNumber) {
        alert("You lose!!");
        currentScore = 0;
        startGame();
      }

});



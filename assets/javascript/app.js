var correct = 0;
var incorrect = 0;
var none = "none";
var block = "block";

$(".start-game").on("click", function() {
  var timeLeft = 29;
  var start = ".start-game";
  var game = ".game-content";
  var timeRemaining = ".remaining";
  var elem = document.querySelector(".time");

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      elem.innerHTML = timeLeft;
      clearTimeout(timerId);
      getScore();
      toggleGame(game, none);
      displayScores();
    } else {
      elem.innerHTML = timeLeft;
      timeLeft--;
    }
  }

  toggleGame(start, none);
  toggleGame(timeRemaining, block);
  toggleGame(game, block);
});

function getScore() {
  checkAnswers();

  function checkAnswers() {
    var correctAnsers = ["gotham", "martha", "spider", "daredevil"];
    for (var i = 0; i < correctAnsers.length; i++) {
      if (document.getElementById(correctAnsers[i]).checked) {
        correct += 1;
        console.log("correct");
      } else {
        incorrect += 1;
        console.log("incorrect");
      }
    }
  }
}

function toggleGame(element, display) {
  $(element).css("display", display);
}

function displayScores() {
  var correctCount = $("#correctCount");
  var incorrectCount = $("#incorrectCount");
  var results = ".results";

  correctCount.text(correct);
  incorrectCount.text(incorrect);

  toggleGame(results, block);
}

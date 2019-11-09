// var timeLeft = 10;
// var elem = document.querySelector(".time");

// // var timerId = setInterval(countdown, 1000);

// function countdown() {
//   if (timeLeft == 0) {
//     elem.innerHTML = timeLeft;
//     clearTimeout(timerId);
//     doSomething();
//   } else {
//     elem.innerHTML = timeLeft;
//     timeLeft--;
//   }
// }

$(".start-game").on("click", function() {
  var timeLeft = 30;
  var elem = document.querySelector(".time");

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      elem.innerHTML = timeLeft;
      clearTimeout(timerId);
      getScore();
    } else {
      elem.innerHTML = timeLeft;
      timeLeft--;
    }
  }
  $(".start-game").css("display", "none");
  $(".game-content").css("display", "block");
});

function getScore() {
  var correct = 0;
  var incorrect = 0;

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

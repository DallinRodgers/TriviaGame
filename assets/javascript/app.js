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
  var timeLeft = 10;
  var elem = document.querySelector(".time");

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      elem.innerHTML = timeLeft;
      clearTimeout(timerId);
      // doSomething();
    } else {
      elem.innerHTML = timeLeft;
      timeLeft--;
    }
  }
});

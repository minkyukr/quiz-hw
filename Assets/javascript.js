var questions = [
    {
        title: "Which month has 28 days?",
        choices: ["January", "Febuary", "March", "All months"],
        answer: 'All months'
    },
    {
        title: "If you were running a race and you passed the person in 2nd place, what place would you be in now?",
        choices: ['first','second','third','last'],
        answer: 'second'
    },
    {
        title: "What are the next two letters in this series? JFMAMJJASO",
        choices: ['JM', 'AJ', "BC", "ND"],
        answer: 'ND'
    },
    {
        title: "How many letters are in the alphabet?",
        choices: ['6', '7', "8", "9"],
        answer: '8'
    },
    {
        title: "June's dad has four daughters, January is the first daughter, February is the second daughter , March is the third daughter, What is the name of the fourth child",
        choices: ['April', 'May', "June", "July"],
        answer: 'June'
    },
  ];

var timeEl = document.querySelector(".col-md-1");
var timerEl = document.getElementById("#timer");
var startButton = document.querySelector('.start');
var secondsLeft = 50;

var choicesEl = document.getElementById('#choices');
var choiceEl = document.getElementById('.choice');

var choiceA = document.getElementById('#A');
var choiceB = document.getElementById('#B');
var choiceC = document.getElementById('#C');
var choiceD = document.getElementById('#D');

startButton.addEventListener('click', function (event) {
    event.preventDefault();

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert('Sorry. Please try again.');
            }
        }, 1000);

    })

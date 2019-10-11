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
var mainEl = document.getElementById("timer");
var 

var secondsLeft = 50;

function startButton() {
    

    function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage('Sorry. Try again.');
        }

    }, 1000);
    }

    setTime();
}
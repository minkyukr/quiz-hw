var questions = [
    {
        question: "Which month has 28 days?",
        choice1: "January",
        choice2: "Febuary",
        choice3: "March", 
        choice4: "All months",
        answer: '4'
    },
    {
        question: "If you were running a race and you passed the person in 2nd place, what place would you be in now?",
        choice1: 'first',
        choice2: 'second',
        choice3: 'third',
        choice4: 'last',
        answer: '2'
    },
    {
        question: "What are the next two letters in this series? JFMAMJJASO",
        choice1: 'JM',
        choice2: 'AJ',
        choice3: 'BC',
        choice4: 'ND',
        answer: '4'
    },
    {
        question: "How many letters are in the alphabet?",
        choice1: '6',
        choice2: '7',
        choice3: '8',
        choice4: '9',
        answer: '3'
    },
    {
        question: "June's dad has four daughters, January is the first daughter, February is the second daughter , March is the third daughter, What is the name of the fourth child",
        choice1: 'April',
        choice2: 'May',
        choice3: 'June',
        choice4: 'July',
        correct: '3'
    },
  ];

var timeEl = document.querySelector(".col-md-1");
var timerEl = document.getElementById("#timer");
var startButton = document.querySelector('.quizBox');
var questionBox = document.querySelector('.questionBox')
var secondsLeft = 51;

var choicesEl = document.getElementById('#choices');
var choiceEl = document.getElementById('.choice');

var choiceA = document.getElementById('#A');
var choiceB = document.getElementById('#B');
var choiceC = document.getElementById('#C');
var choiceD = document.getElementById('#D');

startButton.addEventListener('click', function (event) {
    startButton.style.display = 'none'; 

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert('Sorry. Refresh the page and please try again.');
            }
        }, 1000);

    questionBox.style.display = 'block';

    

    })
  
//     lastQuestionIndex = questions.length-1;
//     var runningQuestionIndex = 0;

//         function renderQuestion(event) {
//             let q = question[runningQuestionIndex];
//             question.innerHTML = '<p>' + q.question+ '</p>';
//             choiceA.innerHTML = q.choiceA;
//             choiceB.innerHTML = q.choiceB;
//             choiceC.innerHTML = q.choiceC;
//             choiceD.innerHTML = q.choiceD;
//             runningQuestionIndex = 0;}
//             renderQuestion()

//             runningQuestionIndex++;
//             renderQuestion();

//     score = 0;
//     function checkAnswer(answer) {
//         if(questions[runningQuestionIndex].correct == answer){
//             alert('Good guess!')
//         } else{
//             answerIsWrong();
//             answer = answer - 10;
//         } if(runningQuestionIndex < lastQuestionIndex){
//             runningQuestionIndex++;
//             questionRender();
//         } else{
//             scoreRender();
//         }
//     }
//     // })

// startButton.addEventListener('click', startQuiz);
// function startQuiz() {
//     startButton.style.display = 'none'; 
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft

//         if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         alert('Sorry. Refresh the page and please try again.');
//             }
//         }, 1000);   
//         renderQuestion();
//         quiz.style.display = 'block';
// }
// DOM 
var timerEl = document.querySelector("#quiz-timer");
var startButton = document.querySelector("#start-button");
var quizBox = document.querySelector("#quizDiv");

var timeLeft = 100;
var time;
var questionNumber = 0;
//Questions
var questions = [
    //question 1
    {
        question: "123",
        answers: ["1", "2", "3"],
        correct: ""
    },
    //question 2
    {
        question: "123?",
        answers: ["1", "2", "3"],
        correct: ""
    },
    //question 3
    {
        question: "123?",
        answers: ["1", "2", "3"],
        correct: ""
    },
    //question 4
    {
        question: "123?",
        answers: ["1", "2", "3"],
        correct: ""
    },
    //question 5
    {
        question: "123?",
        answers: ["1", "2", "3"],
        correct: ""
    },
];
//variables to create building blocks of question
var questionContent = document.createElement("h2");
questionContent.textContent = "";
//function to start the game 
function startQuiz() {
    quizTime();
    
    showQuestion();
    console.log(showQuestion)
}
//event listener to start quiz, timer, and remove start btn
startButton.addEventListener("click", startQuiz);
//function to clear div
function removeDiv() {
    document.getElementById("quizDiv").remove();
}
//timer function
function quizTime() {
    time = setInterval(function() {
        timeLeft--;
        timerEl.innerHTML = timeLeft
    }, 1000)
}
//function to load questions


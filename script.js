var quizDiv = document.getElementById("#quiz");
var questionList = document.getElementById("#question-list")
//Score
var score = 0;
//Questions
var questions = [
    //question 1
    {
        question: "",
        a: "",
        b: "",
        c: "",
        answer: ""
    },
    //question 2
    {
        question: "",
        a: "",
        b: "",
        c: "",
        answer: ""
    },
    //question 3
    {
        question: "",
        a: "",
        b: "",
        c: "",
        answer: ""
    },
    //question 4
    {
        question: "",
        a: "",
        b: "",
        c: "",
        answer: ""
    },
    //question 5
    {
        question: "",
        a: "",
        b: "",
        c: "",
        answer: ""
    },
    //question 6
    {
        question: "",
        a: "",
        b: "",
        c: "",
        answer: ""
    },
];
function startQuiz() {
    setInterval(function(){
        timer--;

    })
}




function renderQuiz() {
    quizDiv.innerHTML = "";
    questionList.textContent = questions.length


    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];

        var li = document.createElement("li");
        li.textContent = question;
        questionList.appendChild(li);
        
        
    }
    console.log(renderQuiz)
}



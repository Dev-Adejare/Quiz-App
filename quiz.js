const questions = [
    {
        questions:"which is largest animal in the world?",
        answers: [
            {text: "shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        questions:"which is largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: true},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]  
    }, 
    {
        
            questions:"which is smallest continent in the world?",
            answers: [
                {text: "Asia", correct: false},
                {text: "Australia", correct: true},
                {text: "Arctic", correct: false},
                {text: "Africa", correct: false},
            ]  
        
    }
];

const questionElement = document.getElementById("quetsion");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionsNo + ". " + currentQuestion.
    questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}
let question = document.getElementById("question");
let choice = document.querySelector("#choice");
let startButton = document.getElementById("startbutton")
let questionContainer = document.getElementById("questioncontainer");
let nextButton = document.getElementById("nextbutton");
let x = 0;

let questions = [
    {
        question: "The = sign is what type of operator?",
        choices: [
            "Boolean",
            "Assignment",
            "String",
            "Interger"
        ]
    },

    {
        question: "What HTML tag is used to link JavaScript to the HTML?",
        options: [
            "Script",
            "Link",
            "Div",
            "Body"
        ]
    },

    {
        question: "Arrays are always indexed with which beginning number?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ]
    },

    {
        question: "A useful tool for printing information to the console, and for debugging is?",
        options: [
            "print",
            "Hello.world",
            "console.log",
            "tell.me"

        ]
    }

];

function startQuiz() {
    console.log("Started");
    startButton.classList.add("hide");
    displayQuestion(questions)

};

function displayQuestion() {
    for (x = 0; x < questions.length;) {
        x++;
    };

    question.innerText = question.question
};

function nextQuestion() {
};

function selectChoice() {
};

function resetButtons() {
    nextButton.classList.add("hide");
};

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
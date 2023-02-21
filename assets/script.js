let question = document.getElementById("question");
let choiceButton = document.querySelector("#choice");
let startButton = document.getElementById("startbutton")
let questionContainer = document.getElementById("questioncontainer");
let nextButton = document.getElementById("nextbutton");
let timerDisplay = document.getElementById("timer");
let x = 0;
let score = 0;
let totalTime = 400;
let timeLeft = totalTime;




let questions = [
    {
        question: "The = sign is what type of operator?",
        choices: [
            { text: "Boolean", type: true },
            { text: "Assignment", type: false },
            { text: "String", type: false },
            { text: "Interger", type: false },
        ]
    },

    {
        question: "What HTML tag is used to link JavaScript to the HTML?",
        choices: [
            { text: "Script", type: true },
            { text: "Link", type: false },
            { text: "Div", type: false },
            { text: "Body", type: false },
        ]
    },

    {
        question: "Arrays are always indexed with which beginning number?",
        choices: [
            { text: "0", type: true },
            { text: "1", type: false },
            { text: "2", type: false },
            { text: "3", type: false },
        ]
    },

    {
        question: "A useful tool for printing information to the console, and for debugging is?",
        choices: [
            { text: "console.log", type: true },
            { text: "Hello.world", type: false },
            { text: "print", type: false },
            { text: "tell.me", type: false },

        ]
    }

];

//for (x = 0; x < questions.length;) {
//    x++;
//};

function startQuiz() {
    console.log("Started");
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide")
    displayQuestion();
    timer();
};

function displayQuestion() {
    let currentQuestion = questions[x];
    question.innerText = currentQuestion.question;
    currentQuestion.choices.forEach(choices => {
        let button = document.createElement("button")
        button.innerText = choices.text
        button.classList.add("button")
        choices.appendChild(button);
    })
};

function nextQuestion() {
};

function selectChoice() {
};

function resetButtons() {
    nextButton.classList.add("hide");
};

function timer() {
    let totalTime = 400;
    let timeLeft = totalTime;
    timerDisplay.textContent = timeLeft; 
};

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
choiceButton.addEventListener("click", selectChoice)

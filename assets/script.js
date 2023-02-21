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

function startQuiz() {
    console.log("Started");
    displayQuestion();
    timer();
    startButton.classList.add("hide");
    question.classList.remove("hide");
    choiceButton.classList.remove("hide");
    nextButton.classList.remove("hide");
};

function displayQuestion() {
    let currentQuestion = questions[x];
    question.innerText = currentQuestion.question;
    choiceButton.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        let button = document.createElement("button")
        button.innerText = choice.text
        button.classList.add("button")
        button.dataset.type = choice.type
        choiceButton.appendChild(button);
    })
};

function nextQuestion() {
    if (x <= question.length - 1) {
        x++;
        displayQuestion();
    } else {
        finishQuiz();
    }
};

function selectChoice() {
    let choiceType = this.dataset.type;
    if (choiceType === "true") {
        score += 1;
    }

};

function resetButtons() {
    nextButton.classList.add("hide");
    question.classList.add("hide");
    choiceButton.classList.add("hide");
    startButton.classList.remove("hide");
};

function timer() {
    let interval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(interval);
            finishQuiz();
        } else {
            timerDisplay.textContent = timeLeft;
            timeLeft -= 1;
        }
    }, 1000);
};

function deduction() {
    if (type === false) {
        timeLeft -= 100;
    }
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
choiceButton.addEventListener("click", selectChoice)

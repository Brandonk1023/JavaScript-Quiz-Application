
let question = document.getElementById("question")
let choiceButton = document.querySelector("#choice")
let startButton = document.getElementById("startbutton")
let questionContainer = document.getElementById("questioncontainer")
let userScoreList = document.getElementById("userScore")
let timerDisplay = document.getElementById("timer")
let scoreButton = document.getElementById("scorebutton")
let scoreContainer = document.getElementById("scorecontainer")
let x = 0
let score = 0
let totalTime = 400
let timeLeft = totalTime
let userScores = []
let currentQuestion = []
let userName = document.getElementById("nameInput").value
let userInfo = {
    name: "",
    score: "",
}


let questions = [
    {
        question: "The = sign is what type of operator?",
        choices: [
            { text: "Assignment", type: true },
            { text: "Boolean", type: false },
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

]

function startQuiz() {
    displayQuestion();
    timer();
    startButton.classList.add("hide");
    question.classList.remove("hide");
    choiceButton.classList.remove("hide");
    timerDisplay.classList.remove("hide");

}

function displayQuestion() {
    currentQuestion = questions[x];
    question.innerText = currentQuestion.question;
    choiceButton.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        let button = document.createElement("button")
        button.innerText = choice.text
        button.classList.add("button")
        button.dataset.type = choice.type
        choiceButton.appendChild(button);
    })
}

function selectChoice(event) {
    let choiceType = event.target.dataset.type
    if (choiceType === "true") {
        score += 25;
        if (x < 3) {
            x++;
        } else {
            return
        }
        displayQuestion();
    } else {
        timeLeft -= 100;
        if (x < 3) {
            x++;
        } else {
            return
        }
        displayQuestion();
    }
}

function resetButtons() {
    question.classList.add("hide");
    choiceButton.classList.add("hide");
    startButton.classList.remove("hide");
    timerDisplay.classList.add("hide");
}

function timer() {
    totalTime = 400;
    let interval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(interval);
            finishQuiz();
        } else {
            timerDisplay.textContent = timeLeft;
            timeLeft -= 1;
        }
    }, 1000);
}



function showScores() {
    localStorage.getItem(userScores, JSON.parse(scoreInfo))
    scoreContainter.classList.remove("hide");
    scoreInfo.forEach(user => {
        let userRank = document.createElement("div")
        div.innerText = "Name: "  + user.name + "Score: " +  user.score
        scoreContainer.appendChild(div)
    })
}

function finishQuiz() {
    document.userInfo.score = score
    document.userInfo.name = userName
    UserScores.unshift(userScores)
localStorage.setItem(scoreInfo, JSON.stringify(userScores))
    resetButtons();
}

startButton.addEventListener("click", startQuiz);
choiceButton.addEventListener("click", selectChoice)
scoreButton.addEventListener("click", showScores)
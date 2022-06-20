const questions = [
    {
        question: "Where was the first attempted allied invasion of France?",
        choices: [' Normandy', 'Nice', 'Dieppe', "Bourdeaux"],
        answer: "Dieppe"

    },

    {
        question: "Which American general was in charge of the pacific campaign?",
        choices: ["George Patton", "Omar Bradley", "George Marshall", "Douglas MacArthur"],
        answer: "Douglas MacArthur"
    },

    {
        question: "When was VE day?",
        choices: ["April", "May", "June", "July"],
        answer: "May"
    },

    {
        question: "Which of these was considered the largest tank battle in history?",
        choices: ["Battle of the Bulge", "D-Day", "Kursk", "Stalingrad", "Market Garden"],
        answer: "Kursk"
    },

    {
        question: "When did the war start?",
        choices: ["1939", "1938", "1941", "1944"],
        answer: "1939"
    }

]

const start = document.getElementById('start-btn');
const scoreEl = document.getElementById('score');
const answersEl = document.querySelector('.answers');
const header = document.getElementById('game-header');
const mainHeaderEl = document.querySelector('.header')
const container = document.querySelector('.container');
const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const gameOver = document.querySelector('.game-over');
const endScore = document.getElementById('end-score');
const scorebtn = document.getElementById('view-score');
const initialEl = document.getElementById('initials');

currentQuestionIndex = 0
score = 0


start.onclick = startGame

function startGame() {
    start.style.display = 'none';
    header.style.display = 'none';
    mainHeaderEl.style.display = 'flex';
    container.style.display = 'block';

    renderQuestion()

}



const renderQuestion = () => {

    if (currentQuestionIndex < questions.length) {
        question.innerText = questions[currentQuestionIndex].question;
        answer1.innerText = questions[currentQuestionIndex].choices[0];
        answer2.innerText = questions[currentQuestionIndex].choices[1];
        answer3.innerText = questions[currentQuestionIndex].choices[2];
        answer4.innerText = questions[currentQuestionIndex].choices[3];
    } else {
        endGame()
    }

}

answersEl.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        // console.log(e.target.textContent);
        let response = e.target.textContent
        currentQuestionIndex++
        console.log(response)
        checkAnswer(response)

    }
});


const checkAnswer = (response) => {

    if (response === questions[currentQuestionIndex - 1].answer) {
        // window.alert('CORRECT!')
        score = score + 10
        scoreEl.innerText = score;
    } else {
        score = score - 5
        scoreEl.innerText = score;
        // window.alert('INCORRECT!')
    }

    console.log(score)
    renderQuestion()
}



endGame = () => {
    mainHeaderEl.style.display = 'none';
    container.style.display = 'none';
    gameOver.style.display = 'block';
    endScore.innerText = score;

    scorebtn.addEventListener('click', () => {
        window.alert('you clicked me')
        let initial = initialEl.value
        localStorage.setItem(initial, score)
    });
}



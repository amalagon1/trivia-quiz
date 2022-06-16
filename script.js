const questions = [
    {
        question: "Where was the first attempted allied invasion of France?",
        choices: ['Normandy', 'Nice', 'Dieppe', "Bourdeaux"],
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

let questionIndex = 0;


//function to start the game//
const startGame = () => {

    $('.start-btn').hide()
    $('.game-header').hide()
    $('.container').show();

    renderQuestion()

}



const renderQuestion = () => {

    $('#question').text(questions[questionIndex].question);
    $('#answer1').text(questions[questionIndex].choices[0])
    $('#answer2').text(questions[questionIndex].choices[1])
    $('#answer3').text(questions[questionIndex].choices[2])
    $('#answer4').text(questions[questionIndex].choices[3])



    $('.btn').click(function () {
        let response = $(this).text()
        console.log(response)
        checkAnswer(response)
    })


}

//function to set the timer
//function to end the quiz
//function to save high score

const checkAnswer = (response) => {


    if (response === questions[questionIndex].answer) {
        window.alert('CORRECT!')
    } else {
        window.alert('INCORRECT!')
    }

    questionIndex++
    console.log(questionIndex)

    renderQuestion()

}






$('.start-btn').click(startGame)
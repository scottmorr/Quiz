var currentQuestionIndex = 0;
var time = 1000;

var questions = [
    {
        question: "Where is local storage stored?",
        choices: ['Your computer console', 'Your i-phone', 'your refigerator'],
        correctAnswer: 'Your computer console',
    },
    {
        question: 'JavaScript is the same as Java.',
        choices: ['true', 'false'],
        correctAnswer: 'false',
    },
     { 
        question: 'Which is the accurate JavaScript link?',
        choices: ['Javascript.com',  '<link rel="stylesheet" href="./style.css" />',  '<script src="script.js"></script>'],          
        correctAnswer:   '<script src="script.js"></script>',
    },
    {
        question: 'Where should the Javascript link be placed on your HTML page?',
        choices: [ 'The top',  'The middle',  'The bottom'],
        correctAnswer: 'The bottom',
    },
    {
        question: 'Which indicates data manipulation in JavaScript?',
        choices: [ 'A function',  'An image',  'A div'],
        correctAnswer: 'A function',
    }
]


// create an array of objects with the question, array of multiple choice answers, and a correct answer

// use the index of the questions array to pull the first question 

// questions[0].question = 'Where is local storage stored?'
// questions[1].question = 'Javascript is the same as Java.'
// questions[2].question = 'Which is the accurate JavaScript link?'
// questions[3].question = 'Where should the javaScript link be placed on your HTML page'
// questions[4].question = 'Which indicates data manipulation in javaScript?'
//use getElementbyId to target card


var start = document.getElementById('start');
var choicesEl = document.getElementById('choices');


function displayQuestion() {
    

    var startScreen = document.getElementById('start-screen');
    startScreen.setAttribute("class", "hide");


    var questionCard = document.getElementById('questions');
    questionCard.removeAttribute("class");

    getQuestion();
}
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);

    var questionTitle = document.getElementById('question-title');
    questionTitle.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach((choice, i) => {
        var choiceNode = document.createElement("button");

        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + "." + choice;

         choices.onClick =  questionClick;

        choicesEl.appendChild(choiceNode);

    })
}

function questionClick () {

        if(this.value !== questions[currentQuestionIndex].correctAnswer) {
            time -= 15;
            if(time < 0) {
                time = 0;
            }

            timeEl.textContent = time;

            feedbackEl.textContent = "Wrong!"
        } else {
            
        }
}

function startQuiz() {
    displayQuestion()  
}




start.onclick = startQuiz;

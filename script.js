var currentQuestionIndex = 0;
var time = questions.length * 15;

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

var questionCard = document.getElementById('question-card');
var start = document.getElementById('start');
var questionTitle = document.getElementById('questionTitle');
var choices = document.getElementById('choices');
var startScreen = document.getElementById('startScreen');

function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
}

function startQuiz() {
    displayQuestion()  
}




start.onclick = startQuiz;
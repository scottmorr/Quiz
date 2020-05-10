var currentQuestionIndex = 0;
var time = 1000;
var numCorrect = 0;
var questions = [
  {
    question: "Where is local storage stored?",
    choices: [' Your computer console', ' Your i-phone', ' your refigerator'],
    correctAnswer: ' Your computer console',
  },
  {
    question: 'JavaScript is the same as Java.',
    choices: [' true', ' false'],
    correctAnswer: ' false',
  },
  {
    question: 'Which is the accurate JavaScript link?',
    choices: [' Javascript.com', ' <link rel="stylesheet" href="./style.css" />', ' <script src="script.js"></script>'],
    correctAnswer: ' <script src="script.js"></script>',
  },
  {
    question: 'Where should the Javascript link be placed on your HTML page?',
    choices: [' The top', ' The middle', ' The bottom'],
    correctAnswer: ' The bottom',
  },
  {
    question: 'Which indicates data manipulation in JavaScript?',
    choices: [' A function', ' An image', ' A div'],
    correctAnswer: ' A function',
  }
]




var start = document.getElementById('start');
var choicesEl = document.getElementById('choices');


function displayQuestion() {


  var startScreen = document.getElementById('start-screen');
  startScreen.setAttribute("class", "hide");

  //<div class="hide"></div>


  var questionCard = document.getElementById('questions');
  questionCard.removeAttribute("class");

  getQuestion();
}


function questionClick() {
  var correct = [];

  if (this.value === questions[currentQuestionIndex].correctAnswer) {
    console.log(this.value);
    alert("Right");
    correct.push(questions[currentQuestionIndex].question);
    numCorrect++

  }
  else {
    alert("Wrong");
  }
  

  if (currentQuestionIndex+1 === questions.length) {
    // showEndScreen();
    alert("Quiz over");
    finalScreen();
  }

  else {
    getNext();
  }
}

function getNext() {
  var nextQuestion = currentQuestionIndex++
  
  ;
  console.log(nextQuestion);
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

    choiceNode.onclick = questionClick;

    choicesEl.appendChild(choiceNode);

  })
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

    choiceNode.onclick = questionClick;

    choicesEl.appendChild(choiceNode);

  })
}




function formatTimeLeft(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);

  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;

  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}


function timerStart() {
  const TIME_LIMIT = 45;
  var timePassed = 0;
  var timeLeft = TIME_LIMIT;
  document.getElementById('timer').textContent = "00:00";
  setInterval(() => {
    timePassed = timePassed + 1;
    timeLeft = TIME_LIMIT - timePassed;
    if (timeLeft < 0) {

      timeLeft = 0;
    }
    var formattedTimeLeft = formatTimeLeft(timeLeft);
    document.getElementById('timer').textContent = [formattedTimeLeft];
  }, 1000)
}


function finalScreen() {
  var endQuestions = document.getElementById('questions')
  endQuestions.setAttribute("class", "hide");

  var finalpage = document.getElementById('endScreen');
  finalpage.removeAttribute("class");

  document.getElementById("correctTab").textContent = "Number Correct: "+numCorrect;
// document.getElementById("firstLabel").textContent = "Good job";
 
 

//if statement
if (numCorrect >= 3) {
 // var greeting = style.color("green");
  greeting  = "You passed!";
} else {             
  greeting = "You failed!";
}

 document.getElementById("firstLabel").textContent= greeting;


};


function startQuiz() {
  displayQuestion();
  timerStart();
}

start.onclick = startQuiz;


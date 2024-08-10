const question = document.getElementById('question');
const choices = document.getElementById('answer-choices');
const submitButton = document.getElementById('submit-btn');
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const winMessage = document.getElementById('win-message');
const loseMessage = document.getElementById('lose-message');
const categorySelect = document.getElementById('category-select')



let questions = {
    category1: [
  {

    question: 'Who is the greatest WWE wrestler of all time?',
    choices: ['John Cena', 'The Rock', 'Hulk Hogan', 'Stone Cold'],
    correctAnswer: 'Stone Cold'
  },
  {
    question: "Which wrestler holds the record for the most Royal Rumble eliminations?",
    choices: ["Kane", "The Undertaker", "The Rock", "Rikishi"],
    correctAnswer: "Kane"
  },

  {
    question: "In what year did the first Women's Royal Rumble match take place?",
    choices: ["2002", "2020", "2012", "2018"],
    correctAnswer: "2018"
  },
  {
    question: "Who won the Women's Royal Rumble in 2024?",
    choices: ["Lita", "Trish Stratus", "Bayley", "Ms Jackie"],
    correctAnswer: "Bayley"
  },
  {
    question: "Which wrestler has the most Royal Rumble match victories?",
    choices: ['Kane', 'Kurt Angle', 'RVD', 'Stone Cold'],
    correctAnswer: "Stone Cold"
  },
  {
    question: 'Who was the first woman to win the Royal Rumble match?',
    choices: ['Sasha Banks', 'Victoria', 'Asuka', "Molly Holly"],
    correctAnswer: 'Asuka'
  },
  {
    question: 'What is the traditional number of participants in the Royal Rumble match?',
    choices: ['10', '30', '25', '50'],
    correctAnswer: '30'
  },
  {
    question: 'In what year did Stone Cold Steve Austin win the Royal Rumble?',
    choices: ['1996', '2020', '1985', '1995'],
    correctAnswer: '1996'
  },
  {
    question: 'How many wrestlers did Kane eliminate in the 2000 Royal Rumble?',
    choices: ['30', '11', '5', '100'],
    correctAnswer: '11'
  },
  {
    question: 'Who won the 2020 Womens Royal Rumble match?',
    choices: ['Charlotte Flair', 'Lita', 'Becky Lynch', 'The Rock'],
    correctAnswer: 'Charlotte Flair'
  },
  
 ],
 category2: [
    {
        question: 'Who was the first WWE Champion?',
        choices: ['Rick Flair', 'Hulk Hogan', 'Iron Shiek', 'Lou Thesz'],
        correctAnswer: 'Lou Thesz'
    },
    {
        question: 'Which wrestler held the WWE Championship for the longest consecutive reign?',
        choices: ['Hulk Hogan', 'Roman Reigns', 'HHH', 'The Rock'],
        correctAnswer: 'Hulk Hogan'
    },
    {
        question: 'How many times has John Cena won the WWE Championship?',
        choices: ['5 times', '17 times', '2 times', '16 times'],
        correctAnswer: '16 times'
      },
      {
        question: 'Who was the youngest WWE Champion in history?',
        choices: ['The Rock', 'Randy Orton', 'Brock Lesner', 'Booker T'],
        correctAnswer: 'Brock Lesnar'
      },
      {
        question: 'What is the name of The Rocks finishing move?',
        choices: ['The Eyebrow', 'What\'s Cooking', 'The Rock Bottom', 'The Rocks People'],
        correctAnswer: 'The Rock Bottom'
      },
      {
        question: 'Which wrestler defeated Hulk Hogan to become the first WWF Champion?',
        choices: ['The Iron Shiek', 'The Iron Claw', 'The Iron Fist', 'The Iron Clothes'],
        correctAnswer: 'The Iron Sheik'
      },
      {
        question: 'Who was the first WWE Womens Champion?',
        choices: ['Charlotte Flair', 'The Fabulous Moolah', 'Becky Lynch', 'The Rock'],
        correctAnswer: 'The Fabulous Moolah'
      },
      {
        question: 'What is the name of the championship belt currently held by Cody Rhodes ?',
        choices: ['WWE Championship', 'Womens Championship', 'US Championship', 'IC Championship'],
        correctAnswer: 'WWE Championship'
      },
      {
        question: 'Who was the first Monday Night Raw Triple Crown Champion?',
        choices: ['The Rock', 'Carlito', 'Edge', 'HHH'],
        correctAnswer: 'HHH'
      },
      {
        question: 'Who can you not see ?',
        choices: ['HHH', 'John Cena', 'Stone Cold', 'The Rock'],
        correctAnswer: 'John Cena'
      },
 ]
};
 
 



let currentCategory = 'category1';
let currentQuestion = 0;
let score = 0;
let wrongAnswers = 0;
let quizActive = false;
let gameEnded = false;



function init() {
    render()
}

function render() {
    if (gameEnded) {
        if (score >= questions[currentCategory].length / 2) {
            winMessage.textContent = 'You Win!'
        } else {
            loseMessage.textContent = 'You Lose!'
        }
        submitButton.style.display = 'none'
        resetButton.style.display = 'block'
    } else if (quizActive) {
        loadQuestion()
    } else {
        startButton.style.display = 'block'
        submitButton.style.display = 'none'
        resetButton.style.display = 'none'
        winMessage.textContent = ''
        loseMessage.textContent = ''
    }
}

function loadQuestion() {
    if (currentQuestion >= question.length) {
        return;
    }
    const currentQuizData = questions[currentCategory][currentQuestion];
    question.textContent = currentQuizData.question

    choices.innerHTML = ''
    currentQuizData.choices.forEach(choice => {
        const li = document.createElement('li')
        li.textContent = choice
        choices.appendChild(li)
    })
}

function checkAnswer(selectAnswer) {
    const currentQuizData = questions[currentCategory][currentQuestion]
    if (selectAnswer === currentQuizData.correctAnswer) {
        score++;
    } else {
        wrongAnswers++
    }
    currentQuestion++
    if (currentQuestion < questions[currentCategory].length && wrongAnswers < 5) {
        loadQuestion()
    } else {
        gameEnded = true
    }
    render()
}


function startQuiz() {
    quizActive = true
    render()
}


function resetQuiz() {
    currentQuestion = 0
    score = 0
    wrongAnswers = 0
    quizActive = false
    gameEnded = false
    winMessage.textContent = ''
    loseMessage.textContent = ''
    location.reload()
}



categorySelect.addEventListener('change', handleCategoryChange)

function handleCategoryChange(event) {
    currentCategory = event.target.value
    currentQuestion = 0
    render()
}

startButton.addEventListener('click', startQuiz)
submitButton.addEventListener('click', () => {
    if (quizActive) {
        checkAnswer()
    }
})

resetButton.addEventListener('click', resetQuiz)

choices.addEventListener('click', (event) => {
    const selectAnswer = event.target.textContent
    checkAnswer(selectAnswer)
})

init()























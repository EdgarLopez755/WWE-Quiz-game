
const question = document.getElementById('question');
const choices = document.getElementById('answer-choices');
const submitButton = document.getElementById('submit-btn');
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const winMessage = document.getElementById('win-message');
const loseMessage = document.getElementById('lose-message');

let questions = [
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
  
 ];


let currentQuestion = 0;
let score = 0;
let wrongAnswers = 0;
let quizActive = false;
let gameEnded = false;

























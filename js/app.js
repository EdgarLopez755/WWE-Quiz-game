const qustions = document.getElementById('question')
const choices = document.getElementById('answer-choices')
const submitButton = document.getElementById('submit-btn')
const startButton = document.getElementById('start-btn')
const resetButton = document.getElementById('reset-btn')






let questions = [
    {
        
        question: " Who won the 2023 Men's Royal Rumble match?",
        answer: "Cody Rhodes",
        choices: ["The Undertaker", "Hulk Hogan", "John Cena"

        ]
    },
    {
        
        question: "Which wrestler holds the record for the most Royal Rumble eliminations?",
        answer: "Kane",
        choices: ["Kurt Angle", "The Rock", "Stone Cold"

        ]
    },
    {
        
        question: "In what year did the first Women's Royal Rumble match take place?",
        answer: "2018",
        choices: ["2004", "1995", "2012"

        ]
    },
    {
        
        question: "Who won the Women's Royal Rumble in 2024?",
        answer: "Bayley",
        choices: ["Lita", "Trish Stratus", "Sasha Banks"

        ]
    },
    {
        
        question: "Which wrestler has the most Royal Rumble match victories?",
        answer: "Steve Austin",
        choices: ["The Undertaker", "X-pac", "The 123 Kid"

        ]
    },
    {
        
        question: "Who was the first woman to win the Royal Rumble match?",
        answer: "Asuka",
        choices: ["Victoria", "Miss Jackie", "Molly Holly"

        ]
    },
    {
        
        question: "What is the traditional number of participants in the Royal Rumble match?",
        answer: "30",
        choices: ["25", "15", "10"

        ]
    },
    {
        
        question: "In what year did Stone Cold Steve Austin win the Royal Rumble?",
        answer: "1996",
        choices: ["1990", "2023", "2002"

        ]
    },
    {
        
        question: "Which wrestler eliminated the most opponents in a single Royal Rumble match?",
        answer: "Kane",
        choices: ["Brock Lesner", "The Rock", "John Cena"

        ]
    },
    {
        
        question: " Who won the 2020 Women's Royal Rumble match?",
        answer: "Charlotte Flair",
        choices: ["Bayley", "Trish Stratus", "Lita"

        ]
    },
]




// let secondQuestions = [
//     {
        
//         question: "Who was the first WWE Champion?",
//         answer: "Lou Thesz",
//         choices: ["The Rock", "Hulk Hogan", "Ric Flair"

//         ]
//     },
//     {
        
//         question: " Which wrestler held the WWE Championship for the longest consecutive reign?",
//         answer: "Hulk Hogan",
//         choices: ["Roman Reigns", "John Cena", "Stone Cold"

//         ]
//     },
//     {
        
//         question: "How many times has John Cena won the WWE Championship?",
//         answer: "16 times",
//         choices: ["12 times", "7 times", "20 times"

//         ]
//     },
//     {
        
//         question: "Who was the youngest WWE Champion in history?",
//         answer: "Brock Lesnar",
//         choices: ["Randy Orton", "The Rock", "Batista"

//         ]
//     },
//     {
        
//         question: "What is the name of The Rock's finishing move?",
//         answer: "The Rock Bottom",
//         choices: ["The Smack Down", "The Eyebrow", "What's Cooking"

//         ]
//     },
//     {
        
//         question: "Which wrestler defeated Hulk Hogan to become the first WWF Champion?",
//         answer: "The Iron Sheik",
//         choices: ["The Rock", "Kurt Angle", "Razor Ramon"

//         ]
//     },
//     {
        
//         question: "Who was the first WWE Women's Champion?",
//         answer: "The Fabulous Moolah",
//         choices: ["Becky Linch", "Monica", "Mother Nature"

//         ]
//     },
//     {
        
//         question: "What is the name of the championship belt currently held by Cody Rhodes ?",
//         answer: "WWE Championship",
//         choices: ["US Championship", "Womens Championship", "LV Belt"

//         ]
//     },
//     {
        
//         question: "Who was the first Monday Night Raw Triple Crown Champion?",
//         answer: "Triple H",
//         choices: ["Kane", "Godfather", "Rick Rude"

//         ]
//     },
//     {
        
//         question: "Which wrestler held both the WWE Championship and the World Heavyweight Championship at the same time?",
//         answer: "John Cena",
//         choices: ["The Rock", "Stone Cold", "The Undertaker"
//         ]
//     },
// ]

let currentQuestion = 0
let score = 0
let quizActive = false
let gameEnded = false



























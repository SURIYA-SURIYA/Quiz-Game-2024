const questions = [ 
    {
        question:"Which are largest animal in the world?",
        answers:[
            { text:"Shark",correct: false},
            { text:"Blue Whale",correct: true},
            { text:"Elephant",correct: false},
            { text:"Giraffe",correct: false}
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            { text:"Vatican city",correct: true},
            { text:"Bhutan",correct: false},
            { text:"Nepal",correct: false},
            {text:"Sri Lanka",correct: false}
        ]
    },
    {
            question:"Which is the largest desert in the world?",
            answers:[
                { text:"kalahari",correct: false},
                { text:"Gobi",correct: false},
                { text:"Sahara",correct: false},
                { text:"Antartica",correct: true}
            ]
    },
    {
            question:"Which is the smallest containent in the world?",
            answers:[
                { text:"asia",correct: false},
                { text:"australia",correct: true},
                { text:"Arctic",correct: false},
                {text:"africa",correct: false}
            ]
    },
    {
        question:"The greated victoria desert is located in the world?",
        answers:[
            { text:"Canada",correct: false},
            { text:"australia",correct: true},
            { text:"west Africa",correct: false},
            {text:"North America",correct: false}
        ]
    }, 
    {
        question:"The largest gulf in the world?",
        answers:[
            { text:"Gulf of Mexico",correct: true},
            { text:"australia",correct: false},
            { text:"west Africa",correct: false},
            {text:"North America",correct: false}
        ]
    },
    {
        question:"How many consonants are there in the English alphabet?",
        answers:[
            { text:"36",correct: false},
            { text:"21",correct: true},
            { text:"24",correct: false},
            {text:"25",correct: false}
        ]
    },
    {
        question:"Which color symbolises pease?",
        answers:[
            { text:"Blue",correct: false},
            { text:"Black",correct: false},
            { text:"Red",correct: false},
            {text:"white",correct: true}
        ]
    },
    {
        question:"Name the largest planet of our solor system?",
        answers:[
            { text:"Mars",correct: false},
            { text:"venus",correct: false},
            { text:"jupiter",correct: true},
            {text:"mercury",correct: false}
        ]
    },
    {
        question:"Name the planet nearest to the earth?",
        answers:[
            { text:"mercury",correct: true},
            { text:"Mars",correct: false},
            { text:"Jupiter",correct: false},
            {text:"Venus",correct: false}
        ]
    },
    {
        question:"Name a Bird  that lays the largest eggs?",
        answers:[
            { text:"peacock",correct: false},
            { text:"ostrich",correct: true},
            { text:"Hen",correct: false},
            {text:"parret",correct: false}
        ]
    },
    {
        question:"Name of the Ntional game in USA ?",
        answers:[
            { text:"Baseball",correct: true},
            { text:"Hockey",correct: false},
            { text:"foodball",correct: false},
            {text:"Cricket",correct: false}
        ]
    },
    {
        question:"Name of the largest Democracy in the world?",
        answers:[
            { text:"Canada",correct: false},
            { text:"India",correct: true},
            { text:"west Africa",correct: false},
            {text:"North America",correct: false}
        ]
    },
    {
        question:"Name of the country kown as the Land of the risng earth?",
        answers:[
            { text:"Japan",correct: true},
            { text:"australia",correct: false},
            { text:"India",correct: false},
            {text:"America",correct: false}
        ]
    },
    {
        question:"Name of the biggest Continent in the world?",
        answers:[
            { text:"Asia",correct: true},
            { text:"Andartica",correct: false},
            { text:"astraiya",correct: false},
            {text:"North America",correct: false}
        ]
    },          

];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.
    question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);     


    });
}



function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";


}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

})


startQuiz();


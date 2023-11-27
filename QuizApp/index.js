const questions = 
    [
        {
            question: "What is the third planet from the sun in our solar system?",
            answers: [
                {text: "Mercury", correct: false},
                {text: "Venus", correct: false},
                {text: "Earth", correct: true},
                {text: "Mars", correct: false},
            ]
        },
        {
            question: "Which process allows plants to convert sunlight into energy?",
            answers: [
                {text: "Photosynthesis", correct: true},
                {text: "Respiration", correct: false},
                {text: "Fermentation", correct: false},
                {text: "Digestion", correct: false},
            ]
        },
        {
            question: "Who was the principal author of the Declaration of Independence in the United States?",
            answers: [
                {text: "George Washington", correct: false},
                {text: "Thomas Jefferson", correct: true},
                {text: "Benjamin Franklin", correct: false},
                {text: "John Adams", correct: false},
            ]
        },
        {
            question: "What is the atomic number of carbon?",
            answers: [
                {text: "206", correct: false},
                {text: "208", correct: false},
                {text: "210", correct: false},
                {text: "6", correct: true},
            ]
        },
        {
            question: "Who formulated the laws of motion and universal gravitation?",
            answers: [
                {text: "Albert Einstein", correct: false},
                {text: "Isaac Newton", correct: true},
                {text: "Galileo Galilei", correct: false},
                {text: "Nikola Tesla", correct: false},
            ]
        },
        {
            question: "Which ocean is the largest on Earth?",
            answers: [
                {text: "Pacific Ocean", correct: true},
                {text: "Atlantic Ocean", correct: false},
                {text: "Indian Ocean", correct: false},
                {text: "Southern Ocean", correct: false},
            ]
        },
        {
            question: "Which novel is authored by Harper Lee and explores racial injustice in the American South?",
            answers: [
                {text: "The Great Gatsby", correct: false},
                {text: "To Kill a Mockingbird", correct: true},
                {text: "1984", correct: false},
                {text: "Pride and Prejudice", correct: false},
            ]
        },
        {
            question: "Who is known for painting 'Guernica' and co-founding the Cubist movement?",
            answers: [
                {text: "Leonardo da Vinci", correct: false},
                {text: "Vincent van Gogh", correct: false},
                {text: "Pablo Picasso", correct: true},
                {text: "Claude Monet", correct: false},
            ]
        },
        {
            question: "Which country is the most populous in the world?",
            answers: [
                {text: "Brazil", correct: false},
                {text: "Russia", correct: false},
                {text: "China", correct: true},
                {text: "India", correct: false},
            ]
        },
        {
            question: "In which sport is the term 'hat-trick' commonly used?",
            answers: [
                {text: "Soccer", correct: false},
                {text: "Cricket", correct: true},
                {text: "Basketball", correct: false},
                {text: "Tennis", correct: false},
            ]
        },
        {
            question: "What is the process by which green plants use sunlight to synthesize foods with the help of chlorophyll?",
            answers: [
                {text: "Photosynthesis", correct: true},
                {text: "Cellular respiration", correct: false},
                {text: "Nitrogen fixation", correct: false},
                {text: "Transpiration", correct: false},
            ]
        },
        {
            question: "In which city did the famous historical event known as the 'Byzantine Empire's Fall' occur?",
            answers: [
                {text: "Rome", correct: false},
                {text: "Athens", correct: false},
                {text: "Cairo", correct: false},
                {text: "Istanbul", correct: true},
            ]
        },
        {
            question: "Which planet is known as the 'Ringed Planet'?",
            answers: [
                {text: "Jupiter", correct: false},
                {text: "Saturn", correct: true},
                {text: "Uranus", correct: false},
                {text: "Neptune", correct: false},
            ]
        },
        {
            question: "What is the world's highest mountain?",
            answers: [
                {text: "Mount Everest", correct: true},
                {text: "K2", correct: false},
                {text: "Kangchenjunga", correct: false},
                {text: "Lhotse", correct: false},
            ]
        },
        {
            question: "Who is credited with the discovery of the structure of DNA?",
            answers: [
                {text: "Charles Darwin", correct: false},
                {text: "Gregor Mendel", correct: false},
                {text: "Marie Curie", correct: false},
                {text: "Rosalind Franklin", correct: true},
            ]
        },
        {
            question: "Which classical composer is known as the 'Father of Symphony'?",
            answers: [
                {text: "Mozart", correct: false},
                {text: "Beethoven", correct: false},
                {text: "Bach", correct: true},
                {text: "Chopin", correct: false},
            ]
        },
        {
            question: "What is the second most abundant element in the Earth's crust?",
            answers: [
                {text: "Silicon", correct: true},
                {text: "Carbon", correct: false},
                {text: "Iron", correct: false},
                {text: "Gold", correct: false},
            ]
        },
        {
            question: "Which river is the longest in the world?",
            answers: [
                {text: "Amazon River", correct: false},
                {text: "Nile River", correct: true},
                {text: "Ganges River", correct: false},
                {text: "Yangtze River", correct: false},
            ]
        },
        {
            question: "Which historical event led to the rise of Napoleon Bonaparte in France?",
            answers: [
                {text: "French Revolution", correct: true},
                {text: "American Revolution", correct: false},
                {text: "Russian Revolution", correct: false},
                {text: "Industrial Revolution", correct: false},
            ]
        },
        {
            question: "Which painting, created by Salvador Dalí, features melting clocks in a barren landscape?",
            answers: [
                {text: "The Mona Lisa", correct: false},
                {text: "Starry Night", correct: false},
                {text: "The Scream", correct: false},
                {text: "The Persistence of Memory", correct: true},
            ]
        }
    ];
    


const questionElenments = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElenments.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener("click",selectAnswer)
    })

}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}  else{
    selectedBtn.classList.add("incorrect");
}  

Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    } button.disabled = "true";
})
nextButton.style.display = "block"

}

function showScore() {
    resetState()
    questionElenments.innerHTML = `You have answered ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    } else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})

startQuiz();
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answersElement.innerHTML = '';
  currentQuestion.answers.forEach((answer, index) => {
    const answerButton = document.createElement('button');
    answerButton.classList.add('answer-btn');
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(index);
    answersElement.appendChild(answerButton);
  });

  resultElement.textContent = '';
  nextButton.classList.add('hidden');
}

function checkAnswer(selectedAnswerIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswerIndex === currentQuestion.correctAnswer) {
    score++;
    resultElement.textContent = "תשובה נכונה!";
  } else {
    resultElement.textContent = "תשובה שגויה!";
  }

  nextButton.classList.remove('hidden');
}

nextButton.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextButton.classList.add('hidden');
  } else {
    resultElement.textContent = `הסיימת את המשחק! נקודות: ${score}`;
    nextButton.classList.add('hidden');
  }
};

loadQuestion();

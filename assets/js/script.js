function buildQuiz() {
  // variable to store the HTML output
  const ouput = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of pisssible answers
    const answers = [];

    // and for each available answer
    for (letter in currentQuestion.answer) {
      // adding an HTML button
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answer[letter]}
          </label>`
      );
    }

    // add this question and answer to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
          <div class="answer"> ${answer.join("")} </div>`
    );
  });

  // combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = ouput.join("");
}
function showResults() {
  // gather answer container from quiz
  const answerContainers = quizContainer.querySelectorAll(".answer");

  // keep track of user's answers
  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainers = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answer green
      answerContainers[questionNumber].style.color = "lightgreen";
    }
    /// if answer is wrong or blank
    else {
      // color the answer red
      answerContainers[questionNumber].style.color = "red";
    }
  });
  // hsow number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  {
    question: "When was JavaScript first introduced?",
    answers: {
      a: "1961",
      b: "1999",
      c: "1995",
    },
    correctAnswer: "c",
  },
  {
    question: "JavaScript is derived from Java.",
    answer: {
      a: "True",
      b: "False",
      c: "Only part of the structure was derived from Java",
    },
    correctAnswer: "b",
  },
  {
    question: "Which of the following is not a data type",
    answer: {
      a: "boolean",
      b: "script",
      c: "number",
    },
    correctAnswer: "b",
  },
  {
    question: "Which of these are not used in a string?",
    answer: {
      a: "numbers",
      b: " letters",
      c: "array",
    },
    correctAnswer: "c",
  },
  {
    question: "What does null or undefined stand for?",
    answer: {
      a: "empty",
      b: "an error",
      c: "data type",
    },
    correctAnswer: "a",
  },
];

// display quiz right away
buildQuiz();
// on submit, show results
submitButton.addEventListener("click", showResults);

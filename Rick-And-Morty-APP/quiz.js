window.onload = function () {
  console.log('js has been wired up!');

  // construct the quiz array of objects
  // each object has a question, an array of answers, and a correctAnswer

  let questionIndex = 0;
  let totalCorrect = 0;

  const quiz = [
    {
      question: "What is the name of Morty's high school crush?",
      answers: [
        'Beth', 'Jessica', 'Summer'
      ],
      correctAnswer: 1
    },
    {
      question: "What is Rick's last name?",
      answers: [
        'Sanchez', 'Gomez', 'Smith'
      ],
      correctAnswer: 0
    },
    {
      question: "What is Morty's sister's name? ",
      answers: [
        'Jessica', 'Winter', 'Summer'
      ],
      correctAnswer: 2
    },
    {
      question: "What is the 'Rickyest Rick? ",
      answers: [
        'C-137', 'C-635', 'C-37'
      ],
      correctAnswer: 0
    },
    {
      question: " Where do the Smith's live ",
      answers: [
        'Earth', 'Unity Planet', 'Anatomy Park'
      ],
      correctAnswer: 0
    }
  ];

  // attach questions to DOM
  function addQuestion() {
    // question text
    const currentQuestion = quiz[questionIndex];

    const questionElement = document.getElementById('question');

    questionElement.innerHTML = currentQuestion.question;
    // answers as radio buttons

    const radio0 = document.getElementById('choice0');

    radio0.innerHTML = currentQuestion.answers[0];
    // adds answer to radio button
    const radio1 = document.getElementById('choice1');

    radio1.innerHTML = currentQuestion.answers[1]

    const radio2 = document.getElementById('choice2');

    radio2.innerHTML = currentQuestion.answers[2]
  }

  function checkQuestion(e) {
    console.log(e.target.id);
    const currentQuestion = quiz[questionIndex];
    if (e.target.id === `choice${currentQuestion.correctAnswer}`) {
      totalCorrect++;
    }
    // if users answers is equal to the correct answer the score goes up
    // if there are no more questions
    if (questionIndex + 1 === quiz.length) {
      finishGame();
      // if there are no more questions , finish game
    } else {
      questionIndex++;
      addQuestion();
    }
    // or else go to next question
  }

  function finishGame() {
    const finalScore = document.getElementById('results');
    finalScore.innerHTML = totalCorrect
  }

  const radio0 = document.getElementById('choice0');
  radio0.addEventListener('click', checkQuestion);
  const radio1 = document.getElementById('choice1');
  radio1.addEventListener('click', checkQuestion);
  const radio2 = document.getElementById('choice2');
  radio2.addEventListener('click', checkQuestion);


  addQuestion();

}

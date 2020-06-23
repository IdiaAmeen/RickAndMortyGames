window.onload = function () {
  console.log('js has been wired up!');

  // construct the quiz array of objects
  // each object has a question, an array of answers, and a correctAnswer

  let questionIndex = 0;
  let totalCorrect = 0;

  const quiz = [
    {
      question: "What planet did Birdperson get married on?",
      answers: [
        'Unity Planet', 'Planet Squanch', 'Cronengberg World'
      ],
      correctAnswer: 1
    },
    {
      question: "What was Rick's favorite exhibit in Anatomy Park?",
      answers: [
        'Pirates of the Pancreas', 'Spleen Mountain', 'Bladder Falls'
      ],
      correctAnswer: 0
    },
    {
      question: "Who did Beth shoot after questioning his existence? ",
      answers: [
        'Tinkles', 'Miss Pancakes', 'Mr. Poopybutthole'
      ],
      correctAnswer: 2
    },
    {
      question: "What kind of doctor is Beth? ",
      answers: [
        'OBGYN', 'Horse Doctor', 'Software Engineer'
      ],
      correctAnswer: 1
    },
    {
      question: " What do the Sygerian Scammers want from Rick? ",
      answers: [
        'Concentrated Dark Matter', 'Portal Fluid', 'Blood'
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

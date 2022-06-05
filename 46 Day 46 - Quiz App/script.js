const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')

const aText = document.getElementById('a__text')
const bText = document.getElementById('b__text')
const cText = document.getElementById('c__text')
const dText = document.getElementById('d__text')

const submitBtn = document.getElementById('submit')

const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
]

let currentQuiz = 0
let score = 0
// let [win, lose] = [0, 0]

loadQuiz()

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  if (!answer) return

  if (answer === quizData[currentQuiz].correct) score++
  currentQuiz++
  if (currentQuiz < quizData.length) {
    loadQuiz()
  } else {
    quiz.innerHTML = `
    <h2>
      You answered at ${score} / ${quizData.length} questions correctly.
    </h2>
    <button onclick="location.reload()">Reload</button>
    `
  }
})

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  // aText.innerText = currentQuizData.a
  // bText.innerText = currentQuizData.b
  // cText.innerText = currentQuizData.c
  // dText.innerText = currentQuizData.d

  new Array(aText, bText, cText, dText).forEach(
    i => (i.innerText = currentQuizData[i.getAttribute('for')])
  )
}

function deselectAnswers() {
  answerEls.forEach(el => (el.checked = false))
}

function getSelected() {
  let answer
  answerEls.forEach(el => {
    if (el.checked) answer = el.id
  })
  return answer
}

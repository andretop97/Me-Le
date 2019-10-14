let position, total, quiz, question, marked = []
let letterA, letterB, letterC, letterD, cont

window.addEventListener('load', () => {
  
  axios.post('http://localhost:3000/quiz/getQuiz',
    {
      id: sessionStorage.getItem('idQuiz')
    }).then((response) => {
      
      sessionStorage.setItem('quiz', JSON.stringify(response.data))
      init()

    }).catch((error) => {
      console.log(error.response);
    });
})

function init() {
  quiz = JSON.parse(sessionStorage.getItem('quiz'))

  question = document.getElementById('question')

  letterA = document.getElementById('a')
  letterB = document.getElementById('b')
  letterC = document.getElementById('c')
  letterD = document.getElementById('d')

  altA = document.getElementById('aAlt')
  altB = document.getElementById('bAlt')
  altC = document.getElementById('cAlt')
  altD = document.getElementById('dAlt')

  cont = document.getElementById('cont')

  total = quiz.questions.length - 1
  position = 0
  marked = new Array(total)

  question.innerHTML = quiz.questions[position].question
  altA.innerHTML = quiz.questions[position].a
  altB.innerHTML = quiz.questions[position].b
  altC.innerHTML = quiz.questions[position].c
  altD.innerHTML = quiz.questions[position].d
  cont.innerHTML = `${position+1}/${total+1}`
}

function saveChecked() {
  if ($("#a").prop("checked"))
    marked[position] = 'a'
  else if ($("#b").prop("checked"))
    marked[position] = 'b'
  else if ($("#c").prop("checked"))
    marked[position] = 'c'
  else if ($("#d").prop("checked"))
    marked[position] = 'd'
  else
    marked[position] = 'u'
}

function clearChecked() {
  $("#a").prop("checked", false);
  $("#b").prop("checked", false);
  $("#c").prop("checked", false);
  $("#d").prop("checked", false);
}

function restoureChecked() {
  if (marked[position] != null)
  $(`#${marked[position]}`).prop("checked", true);
}

$("[name='q'").on("change", function (e) {
  marked[position] = this.value
  console.log(marked)
});

function next() {
  if (position < total) {
    position++
    clearChecked()
    restoureChecked()
    question.innerHTML = quiz.questions[position].question
    altA.innerHTML = quiz.questions[position].a
    altB.innerHTML = quiz.questions[position].b
    altC.innerHTML = quiz.questions[position].c
    altD.innerHTML = quiz.questions[position].d
    cont.innerHTML = `${position+1}/${total+1}`    
  } else {
    alert('não pode avançar mais')
  }
}

function back() {
  if (position > 0) {
    position--
    clearChecked()
    restoureChecked()
    question.innerHTML = quiz.questions[position].question
    altA.innerHTML = quiz.questions[position].a
    altB.innerHTML = quiz.questions[position].b
    altC.innerHTML = quiz.questions[position].c
    altD.innerHTML = quiz.questions[position].d
    cont.innerHTML = `${position+1}/${total+1}`    
  } else {
    alert('não pode voltar mais')
  }
}

function cancel() {
  window.location.href = 'http://localhost:3000/home'
}

function send() {
  axios.post('http://localhost:3000/quiz/validateQuiz',
    {
      idQuiz: sessionStorage.getItem('idQuiz'),
      aws: marked,
      idUser: sessionStorage.getItem('idUser')
    }).then((response) => {
      let data = response.data
      //sessionStorage.setItem('quizDone', data.userQuizDone)
      //console.log(data.userQuizDone)
      alert('Você acertou: ' + data.points + ' questões!')
      window.location.href = "http://localhost:3000/home"
    }).catch((error) => {
      console.log(error.response);
    });
  console.log(marked)
}
window.addEventListener('load', () => {
  axios.post('http://localhost:3000/quiz/getQuizes',
    {
      id: sessionStorage.getItem('idBook'),
    }).then((response) => {
      console.log(response)
      let container = document.getElementById('list')
      let data = response.data;
      sessionStorage.setItem('quizes', JSON.stringify(data))
      for (let i = 0; i < data.length; i++) {
        console.log('teste')
        container.innerHTML += 
        ` <li>
            <h5>${data[i].title} - ${check(data[i]._id)}</h5>
            <button onclick="goToQuiz('${data[i]._id}')">Acessar</button>
          </li>`
      }
    }).catch((error) => {
      console.log(error.response);
    });
})

function goToQuiz(id) {
  sessionStorage.setItem('idQuiz', id)
  window.location.href = "http://localhost:3000/quiz"
}

function check(id) {
  quizDone = JSON.parse(sessionStorage.getItem('quizDone'));
  for (let i = 0; i < quizDone.length; i++) {
    if (quizDone[i].quiz == id) {
      return 'Pontuação (' + quizDone[i].score + ')'
    }
  }
  return 'Novo'
}

function setContainer(data) {
  
}
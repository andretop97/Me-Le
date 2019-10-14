function auth() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  axios.post('http://localhost:3000/user/auth',
    {
      email: email,
      password: password
    }).then((response) => {
      console.log(response)
      sessionStorage.setItem('idUser', response.data._id)
      sessionStorage.setItem('quizDone', JSON.stringify(response.data.quizDone))
      window.location.href = "http://localhost:3000/home"
    }).catch((error) => {
      console.log(error.response);
    });
}
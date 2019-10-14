window.addEventListener('load', () => {
	if (sessionStorage.getItem('isLogged') == true)
		goToHome()
	else
		goToLogin()
})

function goToHome() {
	window.location.href = "http://localhost:3000/home"
}

function goToLogin() {
	window.location.href = "http://localhost:3000/login"
}


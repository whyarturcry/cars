document
	.getElementById('birthdate')
	.setAttribute('max', new Date().toISOString().split('T')[0])

document.getElementById('regForm').addEventListener('submit', function (e) {
	e.preventDefault()

	const loginInput = document.getElementById('login')
	const birthdateInput = document.getElementById('birthdate')
	const genderSelect = document.getElementById('gender')
	const loginError = document.getElementById('login-error')
	const birthError = document.getElementById('birth-error')
	const genderError = document.getElementById('gender-error')

	let isValid = true

	if (!loginInput.validity.valid) {
		loginError.textContent =
			'Логин должен содержать только русские буквы и цифры, от 4 до 10 символов.'
		loginError.style.display = 'block'
		isValid = false
	} else {
		loginError.style.display = 'none'
	}

	if (!birthdateInput.validity.valid) {
		birthError.textContent =
			'Дата рождения обязательна и не может быть в будущем.'
		birthError.style.display = 'block'
		isValid = false
	} else {
		birthError.style.display = 'none'
	}

	if (!genderSelect.validity.valid) {
		genderError.textContent = 'Пол обязателен для выбора.'
		genderError.style.display = 'block'
		isValid = false
	} else {
		genderError.style.display = 'none'
	}

	if (isValid) {
		const profile = {
			login: loginInput.value.trim(),
			birthdate: birthdateInput.value.trim(),
			gender: genderSelect.value.trim(),
		}

		if (window.localStorage) {
			localStorage.setItem('profile', JSON.stringify(profile))
		}

		window.location.href = 'main.html'
	}
})
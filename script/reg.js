document.getElementById('regForm').addEventListener('submit', function (e) {
	e.preventDefault()

	const login = document.getElementById('login').value.trim()
	const birthdate = document.getElementById('birthdate').value.trim()
	const gender = document.getElementById('gender').value.trim()

	let isValid = true

	// Сброс ошибок
	document.querySelectorAll('.reg__error').forEach(error => {
		error.style.display = 'none'
	})

	// Проверка на логин
	const loginRegex = /^[\u0400-\u04FF\d]{4,10}$/ // Русские буквы и цифры, длина 4-10
	if (!login) {
		const error = document.getElementById('login-error')
		error.textContent = 'Введите логин!'
		isValid = false
		error.style.display = 'block'
	} else if (!loginRegex.test(login)) {
		const error = document.getElementById('login-error')
		error.textContent =
			'Логин должен содержать только русские буквы и цифры, от 4 до 10 символов!'
		isValid = false
		error.style.display = 'block'
	}

	if (!birthdate) {
		const error = document.getElementById('birth-error')
		error.textContent = 'Выберите дату рождения!'
		isValid = false
		error.style.display = 'block'
	} else {
		const birthDateObj = new Date(birthdate)
		const minDate = new Date('1950-01-01')
		const maxDate = new Date() // Текущая дата

		if (birthDateObj < minDate || birthDateObj > maxDate) {
			const error = document.getElementById('birth-error')
			error.textContent =
				'Дата рождения должна быть в диапазоне от 1950 года до сегодня!'
			isValid = false
			error.style.display = 'block'
		}
	}

	if (!gender) {
		const error = document.getElementById('gender-error')
		error.textContent = 'Выберите пол!'
		isValid = false
		error.style.display = 'block'
	}

	if (isValid) {
		const profile = { login, birthdate, gender }

		// Сохранение данных в localStorage
		localStorage.setItem('profile', JSON.stringify(profile))

		// Переход на другую страницу
		window.location.href = 'main.html' // Переход на главную страницу
	}
})

// скрываю ошибки
;['login', 'birthdate', 'gender'].forEach(id => {
	document.getElementById(id).addEventListener('input', function () {
		const error = document.getElementById(`${id}-error`)
		if (this.value.trim()) {
			error.style.display = 'none'
		}
	})
})

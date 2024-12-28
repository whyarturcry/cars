const startButton = document.getElementById('start')
const finishButton = document.getElementById('finish')
const restartButton = document.getElementById('restart')

const welcomePage = document.getElementById('welcome-page')
const quizPage = document.getElementById('test-page')
const resultPage = document.getElementById('result-page')

const scoreElement = document.getElementById('score')
let score = 0

startButton.addEventListener('click', () => {
	welcomePage.style.display = 'none'
	quizPage.style.display = 'block'
})

document.querySelectorAll('.test__card').forEach(card => {
	const options = card.querySelectorAll('.test__option')

	options.forEach(option => {
		option.addEventListener('click', () => {
			options.forEach(btn => btn.classList.remove('test__selected'))

			option.classList.add('test__selected')

			if (option.dataset.correct === 'true') {
				score++
			}
		})
	})
})

const inputField = document.getElementById('answer-input')
const correctAnswer = 'дизель' 

if (inputField) {
	inputField.addEventListener('input', function () {
		const userAnswer = this.value.trim().toLowerCase() 
		if (userAnswer === correctAnswer) {
			score++ 
		}
	})
}

finishButton.addEventListener('click', () => {
	saveTestResult(score) 

	scoreElement.textContent = score
	quizPage.style.display = 'none'
	resultPage.style.display = 'block'
})

restartButton.addEventListener('click', () => {
	score = 0
	scoreElement.textContent = score

	document.querySelectorAll('.test__option').forEach(option => {
		option.classList.remove('test__selected')
	})

	if (inputField) {
		inputField.value = '' 
	}

	resultPage.style.display = 'none'
	welcomePage.style.display = 'block'
})

function saveTestResult(score) {
	const profile = JSON.parse(localStorage.getItem('profile')) || {}

	profile.testResult = score 

	localStorage.setItem('profile', JSON.stringify(profile)) 
}

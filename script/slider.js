const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const slides = document.querySelectorAll('.slider-image')
const sliderOptions = document.querySelector('.slider-options')
const bottom = document.getElementById('bottom')
const carNameElement = document.querySelector('.car-name')
const carNumberElement = document.querySelector('.car-number')

let currentSlideIndex = 0
const paginationCircles = []
const carNames = [
	'Молния Маккуин',
	'Мэтр',
	'Салли Каррера',
	'Док Хадсон',
	'Фло',
	'Джексон Шторм',
]

function updateCarInfo() {
	carNameElement.textContent = carNames[currentSlideIndex]
	carNumberElement.textContent = `${currentSlideIndex + 1} / ${slides.length}`
}

function updateNavigationButtons() {
	arrowLeft.disabled = currentSlideIndex === 0
	arrowRight.disabled = currentSlideIndex === slides.length - 1
	arrowLeft.style.opacity = arrowLeft.disabled ? '0.5' : '1'
	arrowRight.style.opacity = arrowRight.disabled ? '0.5' : '1'
}

function changeSlide(slideIndex) {
	currentSlideIndex = slideIndex
	const offset = -currentSlideIndex * 800
	sliderOptions.style.transform = `translateX(${offset}px)`
	updateCarInfo()
	updateNavigationButtons()

	paginationCircles.forEach(circle => circle.classList.remove('active'))
	paginationCircles[currentSlideIndex].classList.add('active')
}

function createPaginationCircle() {
	const div = document.createElement('div')
	div.className = 'pagination-circle'
	bottom.appendChild(div)
	paginationCircles.push(div)
}

function addPagination() {
	slides.forEach(createPaginationCircle)
	paginationCircles[0].classList.add('active')
	paginationCircles.forEach((circle, index) => {
		circle.addEventListener('click', () => changeSlide(index))
	})
}

arrowRight.addEventListener('click', () => {
	if (currentSlideIndex < slides.length - 1) changeSlide(currentSlideIndex + 1)
})

arrowLeft.addEventListener('click', () => {
	if (currentSlideIndex > 0) changeSlide(currentSlideIndex - 1)
})

addPagination()
updateCarInfo()
updateNavigationButtons()

const characters = [
	{
		name: 'Молния Маккуин',
		info: 'Главный герой, красный гоночный автомобиль.',
		img: './images/search/молния.svg',
	},
	{
		name: 'Мэтр',
		info: 'Весёлый эвакуатор, лучший друг Маккуина.',
		img: './images/search/Мээтр.svg',
	},
	{
		name: 'Салли',
		info: 'Синяя Порше 911, владелица мотеля в Радиатор-Спрингс.',
		img: './images/search/саллли.svg',
	},
	{
		name: 'Док Хадсон',
		info: 'Легендарный гонщик, наставник Маккуина.',
		img: './images/search/грусть.svg',
	},
	{
		name: 'Шериф',
		info: 'Полицейский автомобиль города Радиатор-Спрингс, всегда следит за порядком.',
		img: './images/search/шериф.svg',
	},
	{
		name: 'Луиджи',
		info: 'Владелец магазина Касса Делла Шина.',
		img: './images/search/луиджи.svg',
	},
]

const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const resultsList = document.getElementById('results-list')
const characterInfo = document.getElementById('character-info')


function displayCharacterList(query = '') {
	resultsList.innerHTML = '' 

	const filteredCharacters = characters.filter(char =>
		char.name.toLowerCase().includes(query.toLowerCase())
	)

	filteredCharacters.forEach(character => {
		const li = document.createElement('li')
		li.classList.add('dictionary__card') 

		li.innerHTML = `
            <div class="dictionary__card-content">
                <img src="${character.img}" alt="${character.name}" class="dictionary__card-img">
                <div class="dictionary__card-text">
                    <h3>${character.name}</h3>
                    <p>${character.info}</p>
                </div>
            </div>
        `

		li.addEventListener('click', () => displayCharacterInfo(character))
		resultsList.appendChild(li)
	})
}

function displayCharacterInfo(character) {
	characterInfo.style.display = 'block'
	characterInfo.innerHTML = `
        <h2>${character.name}</h2>
        <p>${character.info}</p>
    `
}

searchButton.addEventListener('click', () => {
	const query = searchInput.value.trim()
	displayCharacterList(query)
})

searchInput.addEventListener('input', () => {
	const query = searchInput.value.trim()
	displayCharacterList(query)

	if (!query) {
		characterInfo.style.display = 'none'
	}
})

document.addEventListener('DOMContentLoaded', () => {
	displayCharacterList()
})

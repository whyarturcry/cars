
document.addEventListener('DOMContentLoaded', () => {
	// Получаем данные профиля из localStorage
	const profileData = JSON.parse(localStorage.getItem('profile'))


	if (profileData) {

		document.getElementById('profile-login').textContent =
			profileData.login || '---'

		document.getElementById('profile-birthdate').textContent =
			profileData.birthdate || '---'

		document.getElementById('profile-gender').textContent =
			profileData.gender || '---'

		document.getElementById('profile-test-result').textContent =
			profileData.testResult !== undefined
				? profileData.testResult
				: 'Не пройден'
	}
})


document.getElementById('leave-page-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});

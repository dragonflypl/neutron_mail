function showLanguages() {
	let langs = document.getElementById('langs')
	console.log(langs.classList)
	langs.classList.toggle('show')
}

function showMenu() {
	let nav = document.getElementById('nav')
	let auth = document.getElementById('auth')
	// console.log(menu)
	nav.classList.toggle('show')
	auth.classList.toggle('show')
}
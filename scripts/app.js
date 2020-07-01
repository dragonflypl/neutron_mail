function showLanguages() {
	let langs = document.getElementById('langs')
	console.log(langs.classList)
	langs.classList.toggle('show-langs')
}

function showMenu() {
	let nav = document.getElementById('nav')
	let auth = document.getElementById('auth')
	// console.log(menu)
	nav.classList.toggle('show-nav')
	auth.classList.toggle('show-auth')
}
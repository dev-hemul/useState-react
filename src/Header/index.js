function Header() {
	
	const langs = [
		{key: 'uk', name: 'Українська'},
		{key: 'en', name: 'English'}
	]
	
	let currentLang = langs[0].key;
	
	const changeLang = (langKey) => {
		console.log('before:', currentLang);
		currentLang = langKey;
		console.log('after:', currentLang);
	}
	
	
	
	return (
		<div>
			<h2>Поточна мова:</h2>
			{currentLang}
			
			<h2>Виберіть мову:</h2>
			{langs.map((lang) => (
				<div key={lang.key} onClick={() => changeLang(lang.key)}>{lang.name}</div>
			))}
		</div>
	);
}

export default Header;
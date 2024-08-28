import {useState} from 'react';

function Header() {
	
	const langs = [
		{key: 'uk', name: 'Українська'},
		{key: 'en', name: 'English'}
	]
	
	const [currentLang, setCurrentLang] = useState(langs[0].key);
	
	const changeLang = (langKey) => {
	
		setCurrentLang(langKey);
		
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
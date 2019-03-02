const navigation_sections = [
	{ title: 'Home', path: '/' },
	{ title: 'CV', path: '/cv' },
	{ title: 'Contact', path: '/contact' }
]

function getNavigationSections() {
	navigation_sections.map((exp, key) => {
		exp['navId'] = key
		return exp
	})

	return navigation_sections
}

module.exports = {
	navigation_sections: getNavigationSections()
}

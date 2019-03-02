// module.exports = {
//     // some configuration
//     assetPrefix: process.env.NODE_ENV === 'production' ? '/{han}' : '',
//     // another configuration
//   }

const { experiences } = require('./data/experiences')
const { navigation_sections } = require('./data/nav')

module.exports = {
	exportPathMap: function() {
		const paths = {
			// '/': { page: '/' },
			// '/cv': { page: '/cv' },
			// '/contact': {
			// 	page: '/contact'
			// }
		}
		let cvPath = 0
		navigation_sections.forEach(nav => {
			paths[`${nav.path}`] = {
				page: `${nav.path}`,
				query: { navId: nav.navId }
			}
			if (nav.path == '/cv') cvPath = nav.navId
		})

		experiences.forEach(exp => {
			paths[`/cv/${exp.key}`] = {
				page: '/experience',
				query: { id: exp.key, navId: cvPath }
			}
		})

		console.log(paths)

		return paths
	}
}

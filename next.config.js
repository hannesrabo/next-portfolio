// module.exports = {
//     // some configuration
//     assetPrefix: process.env.NODE_ENV === 'production' ? '/{han}' : '',
//     // another configuration
//   }

const { experiences } = require('./data/experiences')

module.exports = {
	exportPathMap: function() {
		const paths = {
			'/': { page: '/' },
			'/cv': { page: '/cv' },
			'/contact': {
				page: '/contact'
			}
		}

		experiences.forEach(exp => {
			paths[`/cv/${exp.key}`] = {
				page: '/experience',
				query: { id: exp.key }
			}
		})

		return paths
	}
}

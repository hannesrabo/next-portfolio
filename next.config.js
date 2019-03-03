// module.exports = {
//     // some configuration
//     assetPrefix: process.env.NODE_ENV === 'production' ? '/{han}' : '',
//     // another configuration
//   }

const { experiences } = require('./data/experiences')
const { navigation_sections } = require('./data/nav')
const withOffline = require('next-offline')

const nextConfig = {
	exportPathMap: function() {
		const paths = {}
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

		return paths
	},
	workboxOpts: {
		swDest: 'service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'networkFirst',
				options: {
					cacheName: 'https-calls',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}
		]
	}
}

module.exports = withOffline(nextConfig)

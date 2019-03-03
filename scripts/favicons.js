const favicons = require('favicons')
const path = require('path')
const fs = require('fs')

const { site_config } = require('../site-config')
const {
	siteTitleShort,
	themeColor,
	backgroundColor,
	siteDescription
	// imageUrl,
	// siteTitle,
	// siteUrl
} = site_config

const dir = path.resolve(__dirname, '../static/favicons/')
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir)
}

const source = 'static/favicon.png'
const configuration = {
	path: '/static/favicons/',
	appName: siteTitleShort,
	appDescription: siteDescription,
	developerName: siteTitleShort,
	developerURL: null,
	dir: 'auto',
	lang: 'en-US',
	background: backgroundColor,
	theme_color: themeColor,
	display: 'standalone',
	orientation: 'any',
	start_url: '/',
	version: '1.0',
	logging: true,
	icons: {
		android: true,
		appleIcon: true,
		appleStartup: true,
		coast: false,
		favicons: true,
		firefox: false,
		windows: true,
		yandex: false
	}
}

const callback = function(err, res) {
	if (err) {
		console.log(err.message)
		return
	}

	res.images.forEach(image => {
		fs.writeFile(
			path.resolve(__dirname, '../static/favicons/', image.name),
			image.contents,
			err => {
				if (err) {
					console.log(err)
				}
			}
		)
	})

	res.files.forEach(file => {
		fs.writeFile(
			path.resolve(__dirname, '../static/', file.name),
			file.contents,
			err => {
				if (err) {
					console.log(err)
				}
			}
		)
	})
}

favicons(source, configuration, callback)

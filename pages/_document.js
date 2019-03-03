import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import PageHead from '../components/layout/PageHead'
import site_config from '../site-config'

class MyDocument extends Document {
	static getInitialProps({ renderPage, asPath }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		)
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags, asPath }
	}

	render() {
		return (
			<html>
				<Head>{this.props.styleTags}</Head>
				<PageHead {...site_config} query={this.props.asPath} />
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

export default MyDocument

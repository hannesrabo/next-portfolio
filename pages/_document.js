import Document, { Main, NextScript } from 'next/document'
import Head from 'next/head'
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
				{/* <PageHead {...site_config} query={this.props.asPath}>
					{this.props.styleTags}
				</PageHead> */}
				<Head>
					{this.props.styleTags} <title>This is the title</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

export default MyDocument

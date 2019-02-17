import App, { Container } from 'next/app'
import Page from '../components/Page'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		background-color: #67a2ce;
		color: #222;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
`

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<Container>
				<Page>
					<GlobalStyle />
					<Component {...pageProps} />
				</Page>
			</Container>
		)
	}
}

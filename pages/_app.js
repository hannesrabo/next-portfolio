import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import Header from '../components/layout/Header'
import styled from 'styled-components'
import { PageTransition } from 'next-page-transitions'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		color: #222;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	/* .page-transition-enter {
		opacity: 0;
	}
	.page-transition-enter-active {
		opacity: 1;
		transition: opacity 150ms ease-in;
	} */
	.page-transition-exit {
		opacity: 1;
	}
	.page-transition-exit-active {
		opacity: 0;
		transition: opacity 150ms ease-in;
	}
`

const Background = styled.div`
	margin: 0 auto;

	background-image: url('/static/abstract-tree-top.svg');
	background-position: top right;

	background-repeat: no-repeat;
	background-size: 80%;
	width: 100%;
	padding: 150px 0 20px;
	box-shadow: 0 0 20px 17px white inset;

	@media (min-width: 650px) {
		background-size: 70%;
	}
	@media (min-width: 1100px) {
		width: 80%;
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
		const { Component, pageProps, router } = this.props

		return (
			<Container>
				<GlobalStyle />
				<Background>
					<Header query={router.query} />
					<PageTransition timeout={200} classNames="page-transition">
						<Component {...pageProps} />
					</PageTransition>
				</Background>
			</Container>
		)
	}
}

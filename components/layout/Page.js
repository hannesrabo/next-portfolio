import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import Meta from './Meta'
import { theme } from '../Theme'
import Header from './Header'
import Footer from './Footer'
// url('/static/abstract-tree-bottom.svg')
const Background = styled.div`
	margin: 0 auto;
	background-image: url('/static/abstract-tree-top.svg'),
		url('/static/abstract-tree-bottom.svg');
	background-repeat: no-repeat;
	background-size: 80%;
	width: 100%;
	background-position: top right, bottom left;
	padding: 150px 0 20px;
	box-shadow: 0 0 20px 17px white inset;

	@media (min-width: 650px) {
		background-size: 60%;
	}
	@media (min-width: 1100px) {
		width: 80%;
		background-size: 53%;
	}
	@media (min-width: 1400px) {
		width: 74%;
		background-size: 56%;
	}
`

const Wrapper = styled.div`
	width: 80%;
	max-width: 850px;
	margin: 0 auto;
`

class Page extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Background>
					<Wrapper>
						<Meta />
						<Header {...this.props} />
						<>{this.props.children}</>
						<Footer {...this.props} />
					</Wrapper>
				</Background>
			</ThemeProvider>
		)
	}
}

Page.propTypes = {
	currentPage: PropTypes.string.isRequired
}

export default Page

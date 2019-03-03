import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from '../Theme'
import Footer from './Footer'

const Wrapper = styled.div`
	width: 95%;
	max-width: 850px;
	margin: 0 auto;

	@media (min-width: 850px) {
		width: 80%;
	}
`

class Page extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Wrapper>
					<>{this.props.children}</>
					<Footer {...this.props} />
				</Wrapper>
			</ThemeProvider>
		)
	}
}

Page.propTypes = {
	currentPage: PropTypes.string.isRequired
}

export default Page

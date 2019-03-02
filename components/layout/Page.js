import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import Meta from './Meta'
import { theme } from '../Theme'
import Header from './Header'
import Footer from './Footer'
// url('/static/abstract-tree-bottom.svg')

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
				<Wrapper>
					<Meta />
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

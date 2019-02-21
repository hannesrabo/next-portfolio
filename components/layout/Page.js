import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import Meta from './Meta'
import { theme } from '../Theme'

import { NavBar, SectionTitle } from './NavBar'
import { navigation_sections } from '../../data/nav'
import { Header } from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
	width: 80%;
	max-width: 850px;
	margin: 150px auto 20px;
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
					<Header>
						<NavBar>
							<ul>
								{navigation_sections.map(
									({ title, path }, i) => (
										<SectionTitle
											key={i}
											active={
												this.props.currentPage === path
											}
										>
											<Link href={path} prefetch shallow>
												<a>{title}</a>
											</Link>
										</SectionTitle>
									)
								)}
							</ul>
						</NavBar>
					</Header>
					<>{this.props.children}</>
					<Footer />
				</Wrapper>
			</ThemeProvider>
		)
	}
}

Page.propTypes = {
	currentPage: PropTypes.string.isRequired
}

export default Page

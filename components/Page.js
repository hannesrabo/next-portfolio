import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import Meta from '../components/Meta'
import { theme } from './Theme'

import { NavBar, SectionTitle } from './NavBar'
import { navigation_sections } from '../data/nav'

class Page extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<div>
					<Meta />
					<header>
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
					</header>
					<>{this.props.children}</>
				</div>
			</ThemeProvider>
		)
	}
}

Page.propTypes = {
	currentPage: PropTypes.string.isRequired
}

export default Page

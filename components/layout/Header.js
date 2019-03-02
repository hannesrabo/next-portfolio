import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Router from 'next/router'

import { navigation_sections } from '../../data/nav'
import { NavBar, SectionTitle } from './NavBar'
import ArrowIcon from '../svg/ArrowIcon'

const HeaderContainer = styled.header`
	width: 80%;
	max-width: 850px;
	margin: 0 auto;
	/* width: 100%; */
	display: flex;
	justify-content: space-between;
`

const BackArrow = styled.div`
	width: 35px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding-bottom: 15px;
	cursor: pointer;
`

class Header extends Component {
	constructor(props) {
		super(props)

		let initialSelection = 0
		let query = this.props.query
		if (query && query.navId) initialSelection = query.navId

		this.state = {
			selectedSection: initialSelection
		}
	}

	componentDidMount() {
		// Using this event to make sure we react even if they don't press the
		// nav bar.
		const handleRouteChange = url => {
			let rUrl = url
			if (rUrl.length > 1 && rUrl[rUrl.length - 1] == '/')
				rUrl = url.substr(0, rUrl.length - 1)

			navigation_sections.map((section, index) => {
				if (section.path == rUrl) {
					this.setState({ selectedSection: index })
				}
			})
		}

		Router.events.on('routeChangeStart', handleRouteChange)
	}

	render() {
		return (
			<HeaderContainer>
				{this.props.backTo ? (
					<BackArrow
						onClick={() => {
							Router.push(this.props.backTo)
						}}
					>
						<ArrowIcon flipX />
					</BackArrow>
				) : (
					''
				)}

				<NavBar>
					<ul>
						{navigation_sections.map(({ title, path }, i) => (
							<SectionTitle
								activeIndex={this.state.selectedSection}
								numberOfTabs={navigation_sections.length}
								key={i}
								active={this.state.selectedSection === i}
							>
								<Link href={path} prefetch shallow>
									<a>{title}</a>
								</Link>
							</SectionTitle>
						))}
					</ul>
				</NavBar>
			</HeaderContainer>
		)
	}
}

export default Header

import React, { Component } from 'react'
import Container from '../components/styles/Container'
import { NavBar, SectionTitle } from '../components/styles/NavBar'
import styled from 'styled-components'

const NavContainer = styled.div`
	width: 30%;
	right: 10%;
	position: absolute;
`

const HeaderContainer = styled.div`
	height: 150px;
`

class index extends Component {
	state = {
		selectedSection: 0,
		sections: [{title: 'Home'}, {title: 'Projects'}, {title: 'Contact'}]
	}

	render() {
		return (
			<Container>
				<HeaderContainer>
					<NavContainer>
						<NavBar>
							<ul>
								{this.state.sections.map(({ title }, i) => (
									<SectionTitle
										key={i}
										active={this.state.selectedSection === i}
										activeIndex={this.state.selectedSection}
										numberOfTabs={this.state.sections.length}
										onClick={() =>
											this.setState({ selectedSection: i })
										}
									>
										<a>{title}</a>
									</SectionTitle>
								))}
							</ul>
						</NavBar>
					</NavContainer>
				</HeaderContainer>
				<div>
					<p>
						This is some content.
					</p>
				</div>
			</Container>
		)
	}
}

export default index

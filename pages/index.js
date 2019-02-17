import React, { Component } from 'react'
import Container from '../components/styles/Container'
import { NavBar, SectionTitle } from '../components/styles/NavBar'

class index extends Component {
	state = {
		selectedSection: 0,
		sections: ['Home', 'Projects', 'Contact']
	}

	render() {
		return (
			<Container>
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

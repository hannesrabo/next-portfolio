import React, { Component } from 'react'
import Page from '../components/layout/Page'
import { Card } from '../components/Card'
import styled from 'styled-components'

import { experiences } from '../data/experiences'
import ExperienceListing from '../components/experience/ExperienceListing'
import SingleExperiencePage from '../components/pages/SingleExperiencePage'
import { theme } from '../components/Theme'

const Container = styled.div`
	h1 {
		text-align: center;
	}
`

class AllExperiencesPage extends Component {
	render() {
		return (
			<Page currentPage="/cv">
				<Container>
					<Card color={theme.colors.primary_light}>
						<h1>Experiences</h1>
						<ExperienceListing
							experiences={this.props.experiences}
						/>
					</Card>
				</Container>
			</Page>
		)
	}
}

class CVPage extends Component {
	static async getExperience(id) {
		return experiences[id]
	}

	static async getInitialProps({ query }) {
		let res = undefined
		if (query.id !== undefined) res = await this.getExperience(query.id)

		return { post_id: query.id, experience: res }
	}

	render() {
		if (this.props.post_id === undefined) {
			return <AllExperiencesPage experiences={experiences} />
		} else {
			return <SingleExperiencePage experience={this.props.experience} />
		}
	}
}

export default CVPage

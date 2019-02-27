import React, { Component } from 'react'
import Page from '../components/layout/Page'
import { Card } from '../components/Card'
import styled from 'styled-components'

import { experiences } from '../data/experiences'
import ExperienceListing from '../components/experience/ExperienceListing'
import ExperienceBlock from '../components/experience/ExperienceBlock'

const Container = styled.div`
	h1 {
		text-align: center;
	}
`

class Cv extends Component {
	// static getInitialProps({ query }) {
	// 	console.log(query)
	// 	return { post_id: query.id }
	// }

	static async getExperience(id) {
		return experiences[id]
	}

	static async getInitialProps({ query }) {
		let res = undefined
		if (query.id !== undefined) res = await Cv.getExperience(query.id)

		return { post_id: query.id, experience: res }
	}

	render() {
		if (this.props.post_id === undefined) {
			return (
				<Page currentPage="/cv">
					<Container>
						<Card light>
							<h1>Experiences</h1>
							<ExperienceListing experiences={experiences} />
						</Card>
					</Container>
				</Page>
			)
		} else {
			const expBlock =
				this.props.experience !== undefined ? (
					<ExperienceBlock experience={this.props.experience} />
				) : (
					''
				)

			return (
				<Page currentPage="/cv">
					<Container>
						<Card light>{expBlock}</Card>
					</Container>
				</Page>
			)
		}
	}
}

export default Cv

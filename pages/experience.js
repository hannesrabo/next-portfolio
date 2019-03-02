import React, { Component } from 'react'
import styled from 'styled-components'
import Error from 'next/error'
import Router from 'next/router'

import Page from '../components/layout/Page'
import { Card } from '../components/Card'
import { theme } from '../components/Theme'
import ExperienceBlock from '../components/experience/ExperienceBlock'

import { experiences } from '../data/experiences'

const CardLayout = styled.div`
	display: flex;
	color: white;
	padding: 15px;

	h1 {
		margin-top: 0;
	}

	> div:first-child {
		margin-right: 40px;

		> hr {
			margin: 20px 0;
		}

		ul {
			padding-left: 12px;
		}
	}
`

const ExperienceContainer = styled.div`
	margin: 10px;
`

class Experience extends Component {
	constructor(props) {
		super(props)
	}

	static getExperience(id) {
		return experiences[id]
	}

	static async getInitialProps({ query }) {
		let experience = await Experience.getExperience(query.id)
		return { post_id: query.id, experience: experience }
	}

	// componentDidMount() {
	// 	if (!this.experience && Router.query.id != this.state.post_id)
	// 		this.setState({
	// 			post_id: Router.query.id
	// 		})
	// }

	render() {
		// if (process.browser && !this.experience) {
		// 	this.experience = Experience.getExperience(Router.query.id)
		// }

		// if (this.state.post_id != undefined) {
		// 	this.experience = Experience.getExperience(this.props.post_id)
		// }

		let experience = this.props.experience

		return (
			<Page currentPage="/cv" color={theme.colors.secondary} backTo="/cv">
				<Card color={theme.colors.secondary}>
					{experience == undefined ? (
						<p>Looking for the post...</p>
					) : (
						<CardLayout>
							<div>
								<h1>
									{experience.start_year}
									{experience.start_year ==
									experience.end_year
										? ''
										: ` - ${experience.end_year}`}
								</h1>
								<p>
									{experience.start_month}
									{experience.end_year !== 'Present'
										? ` - ${experience.end_month}`
										: ''}
								</p>
								<hr />
								<ul>
									{experience.keywords.map((word, key) => (
										<li key={key}>{word}</li>
									))}
								</ul>
							</div>
							<Card
								color={theme.colors.secondary_light}
								noShadow
								noSpacer
							>
								<ExperienceContainer>
									<ExperienceBlock
										experience={experience}
										noDate
										noLink
									/>
								</ExperienceContainer>
							</Card>
						</CardLayout>
					)}
				</Card>
			</Page>
		)
	}
}

export default Experience

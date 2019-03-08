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
	min-height: 390px;
	flex-wrap: wrap;

	@media (min-width: 850px) {
		flex-wrap: nowrap;
	}

	h1 {
		margin-top: 0;
		margin-right: 20px;
	}

	> div:first-child {
		margin-right: 40px;
		padding: 40px 0 25px 35px;
		display: flex;
		justify-content: space-between;
		width: 100%;

		@media (min-width: 850px) {
			display: block;
			max-width: 120px;
			padding: 30px;
			width: auto;
		}

		> hr {
			margin: 20px 0;
			display: none;
			@media (min-width: 850px) {
				display: block;
			}
		}

		ul {
			padding-left: 12px;
		}
	}
`

const ExperienceContainer = styled.div`
	background: ${props => props.theme.colors.primary_light};
	flex: 1 0 0;
	padding: 35px;
	color: black;
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
			<Page currentPage="/cv" color={theme.colors.primary} backTo="/cv">
				<Card color={theme.colors.primary} noPadding>
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
									{experience.end_year === 'Present'
										? 'From '
										: ''}
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

							<ExperienceContainer>
								<ExperienceBlock
									experience={experience}
									noDate
									noLink
									large
								/>
							</ExperienceContainer>
						</CardLayout>
					)}
				</Card>
			</Page>
		)
	}
}

export default Experience

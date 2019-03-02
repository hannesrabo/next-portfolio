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
		this.state = {
			post_id: props.post_id
		}
	}

	throw404() {
		if (process.browser) {
			return <Error statusCode={404} />
		} else {
			return <span />
		}
	}

	static getExperience(id) {
		return experiences[id]
	}

	static async getInitialProps({ query }) {
		return { post_id: query.id }
	}

	componentDidMount() {
		if (Router.query.id != this.state.post_id)
			this.setState({
				post_id: Router.query.id
			})
	}

	render() {
		let experience = Experience.getExperience(this.state.post_id)

		if (process.browser) {
			console.log('Router: ', Router.query.id)
			console.log('post_id: ', this.state.post_id)
			console.log('experience: ', experience)
		}

		if (experience == undefined) return <p>Post not found</p>

		return (
			<Page currentPage="/cv" color={theme.colors.secondary} backTo="/cv">
				<Card color={theme.colors.secondary}>
					<CardLayout>
						<div>
							<h1>
								{experience.start_year}
								{experience.start_year == experience.end_year
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
				</Card>
			</Page>
		)
	}
}

export default Experience

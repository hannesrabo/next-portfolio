import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExperienceBlock from '../experience/ExperienceBlock'
import Page from '../layout/Page'
import { Card } from '../Card'
import { theme } from '../Theme'
import styled from 'styled-components'

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

class SingleExperiencePage extends Component {
	render() {
		let experience = this.props.experience

		return (
			<Page currentPage="/cv" color={theme.colors.secondary}>
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
									experience={this.props.experience}
									noDate
								/>
							</ExperienceContainer>
						</Card>
					</CardLayout>
				</Card>
			</Page>
		)
	}
}

SingleExperiencePage.propTypes = {
	experience: PropTypes.any.isRequired
}

export default SingleExperiencePage

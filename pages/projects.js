import React, { Component } from 'react'
import Page from '../components/layout/Page'
import { Card } from '../components/Card'
import styled from 'styled-components'
import SchoolIcon from '../components/svg/SchoolIcon'

const YearBlock = styled.div`
	display: flex;

	padding: 20px;

	h2 {
		display: block;
		color: black;
		margin: 0 60px 0 0;
	}
`

const ExperienceBlockContainer = styled.div`
	display: flex;

	margin: 0 auto 20px;

	> span {
		margin-top: 1px;
	}

	h3,
	p {
		margin: 0 0 20px 20px;

		span {
			display: block;
			margin-top: 15px;
			font-style: italic;
		}
	}
	border-bottom: 0;
	&:last-child {
		border-bottom: 1px solid gray;
		padding-bottom: 20px;
		margin-bottom: 0;
	}
`

const ExperienceBlock = () => {
	return (
		<ExperienceBlockContainer>
			<SchoolIcon width={24} height={24} />
			<div>
				<h3>Global Development Hub</h3>
				<p>
					International Project Work and Exchange Student
					<span>
						Challenge driven ICT project with local students in
					</span>
				</p>
			</div>
		</ExperienceBlockContainer>
	)
}

class projects extends Component {
	render() {
		return (
			<Page currentPage="/projects">
				<Card light>
					<YearBlock>
						<h2>2019</h2>

						<div>
							<ExperienceBlock />
							<ExperienceBlock />
							<ExperienceBlock />
						</div>
					</YearBlock>

					<YearBlock>
						<h2>2018</h2>

						<div>
							<ExperienceBlock />
							<ExperienceBlock />
							<ExperienceBlock />
						</div>
					</YearBlock>
				</Card>
			</Page>
		)
	}
}

export default projects

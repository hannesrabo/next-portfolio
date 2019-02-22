import React, { Component } from 'react'
import Page from '../components/layout/Page'
import { Card } from '../components/Card'
import styled from 'styled-components'

const ExperienceCardContainer = styled.div`
	display: flex;
	flex-direction: row;
`

const CardContainer = styled.div`
	flex-grow: 3;
	margin-left: 30px;
`

class projects extends Component {
	render() {
		return (
			<Page currentPage="/projects">
				<ExperienceCardContainer>
					<p>This is some info</p>

					<CardContainer>
						<Card>
							<p>LS Elektronik</p>
						</Card>
						<Card>
							<p>This is some experience</p>
						</Card>
					</CardContainer>
				</ExperienceCardContainer>
			</Page>
		)
	}
}

export default projects

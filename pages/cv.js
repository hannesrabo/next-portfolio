import React, { Component } from 'react'
import Page from '../components/layout/Page'
import { Card } from '../components/Card'
import styled from 'styled-components'

import { experiences } from '../data/experiences'
import ExperienceListing from '../components/experience/ExperienceListing'
import { theme } from '../components/Theme'

const Container = styled.div`
	h1 {
		text-align: center;
		color: ${props => props.theme.colors.primary_dark};
	}
`

class CVPage extends Component {
	render() {
		return (
			<Page currentPage="/cv" color={theme.colors.secondary}>
				<Container>
					<Card color={theme.colors.secondary_tint}>
						<h1>Experiences</h1>
						<ExperienceListing experiences={experiences} />
					</Card>
				</Container>
			</Page>
		)
	}
}

export default CVPage

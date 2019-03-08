import React, { Component } from 'react'
import styled from 'styled-components'
import Page from '../components/layout/Page'
import { Card } from '../components/Card'
import { theme } from '../components/Theme'
const Container = styled.div`
	text-align: center;
	min-height: 300px;
	h1,
	p {
		margin: 45px;
	}
`
class contact extends Component {
	render() {
		return (
			<Page currentPage="/contact">
				<Card color={theme.colors.primary_light}>
					<Container>
						<h1>Contact me!</h1>

						<p>Email: hannes.rabo@gmail.com</p>

						<p>Phone: Upon request</p>
					</Container>
				</Card>
			</Page>
		)
	}
}

export default contact

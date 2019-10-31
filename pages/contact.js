import React, { Component } from 'react'
import styled from 'styled-components'
import Page from '../components/layout/Page'
import { Card } from '../components/Card'
import { theme } from '../components/Theme'
const Container = styled.div`
	min-height: 300px;
	h1 {
		text-align: center;
	}

	h1,
	p {
		margin: 45px;
	}

	table {
		margin: 0 auto;
	}

	td {
		padding-right: 20px;
		padding-bottom: 20px;
	}
`


class contact extends Component {
	render() {
		return (
			<Page currentPage="/contact">
				<Card color={theme.colors.primary_light}>
					<Container>
						<h1>Contact me!</h1>

						<table>
							<tr>
								<td>Email</td>
								<td><a href="mailto:hannes.rabo@gmail.com">hannes.rabo@gmail.com</a></td>
							</tr>
							<tr>
								<td>LinkedIn</td>
								<td><a href="https://www.linkedin.com/in/hannes-rabo/">https://www.linkedin.com/in/hannes-rabo/</a></td>
							</tr>
							<tr>
								<td>GitHub</td>
								<td><a href="https://github.com/hannesrabo">https://github.com/hannesrabo</a></td>
							</tr>
						</table>
					</Container>
				</Card>
			</Page>
		)
	}
}

export default contact

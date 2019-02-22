import React, { Component } from 'react'
import styled from 'styled-components'
import Page from '../components/layout/Page'
import { Card } from '../components/Card'

const NavContainer = styled.div`
	width: 30%;
	right: 10%;
	position: absolute;
`

const HeaderContainer = styled.div`
	height: 150px;
`

class contact extends Component {
	render() {
		return (
			<Page currentPage="/contact">
				<Card light>
					<h1>Contact me!</h1>

					<p>Email: hannes.rabo@gmail.com</p>

					<p>Phone: Upon request</p>
				</Card>
			</Page>
		)
	}
}

export default contact

import React, { Component } from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { Card } from '../components/Card'

const NavContainer = styled.div`
	width: 30%;
	right: 10%;
	position: absolute;
`

const HeaderContainer = styled.div`
	height: 150px;
`

class index extends Component {
	render() {
		return (
			<Page currentPage="/">
				<div>
					<Card>
						<p>This is some content.</p>
					</Card>
				</div>
			</Page>
		)
	}
}

export default index

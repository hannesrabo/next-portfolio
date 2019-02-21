import React, { Component } from 'react'
import styled from 'styled-components'
import Page from '../components/Page'

const NavContainer = styled.div`
	width: 30%;
	right: 10%;
	position: absolute;
`

const HeaderContainer = styled.div`
	height: 150px;
`

class projects extends Component {
	render() {
		return (
			<Page currentPage="/projects">
				<div>
					<p>Projects.</p>
				</div>
			</Page>
		)
	}
}

export default projects

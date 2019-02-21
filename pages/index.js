import React, { Component } from 'react'
import styled from 'styled-components'
import Page from '../components/layout/Page'
import { Card } from '../components/Card'

const CardLayout = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	color: white;

	h1 {
		padding-bottom: 16px;
		border-bottom: 2px solid white;
	}

	div {
		padding: 10px;
	}

	img {
		margin: 40px;
		border: 2px solid white;
	}
`

const ItalicText = styled.p`
	font-style: italic;
`

class index extends Component {
	render() {
		return (
			<Page currentPage="/">
				<Card>
					<CardLayout>
						<div>
							<h1>
								<span>Hannes</span> Rabo
							</h1>
							<ItalicText>
								Hi! I am glad you found your way here.
							</ItalicText>
							<p>
								Apart from that I am also active as a leader and
								organizer of weekly activities and events
								multiple times every year
							</p>
							<p>
								I am a curious and fast learning computer
								science student with experience as both research
								assistant, teaching assistant as well as
								software developer.
							</p>
						</div>
						<img
							width="32%"
							src="/static/img/profile_img.jpg"
							alt="profile image"
						/>
					</CardLayout>
				</Card>

				<Card light>
					<p>Hellow</p>
				</Card>
			</Page>
		)
	}
}

export default index

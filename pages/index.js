import React, { Component } from 'react'
import styled from 'styled-components'

import Link from 'next/link'

import Page from '../components/layout/Page'
import { Card } from '../components/Card'
import BusinessIcon from '../components/svg/BusinessIcon'
import SchoolIcon from '../components/svg/SchoolIcon'
import ArrowIcon from '../components/svg/ArrowIcon'
import { theme } from './../components/Theme'

const CardLayoutMain = styled.div`
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

const CardLayoutQuickFacts = styled.div`
	> div {
		display: flex;
		> div {
			margin: 25px;

			h3 {
				width: 60%;
				margin: 4px 20px;
			}
		}

		> div:first-child {
			padding-right: 30px;
			border-right: 1px solid gray;
		}
	}

	h2 {
		font-weight: 200;
		text-align: center;
	}
`

const CategoryHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
`

const LinkContainer = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	text-align: center;
	font-weight: 500;
	text-decoration: none;
	color: ${props => props.theme.colors.primary_dark};
	font-size: 22px;
	cursor: pointer;

	p {
		font-weight: bold;
	}
`

class index extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Page currentPage="/">
				<Card>
					<CardLayoutMain>
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
					</CardLayoutMain>
				</Card>

				<Card color={theme.colors.primary_light}>
					<CardLayoutQuickFacts>
						<h2>Quick Facts</h2>
						<div>
							<div>
								<CategoryHeader>
									<SchoolIcon />

									<h3>Education</h3>
								</CategoryHeader>
								<p>
									<span>
										KTH Royal Institute of Techology
									</span>
								</p>
								<p>
									Degree program in ICT, Distributed Systems
									and Data Science
								</p>
								<p>
									Experience with distributed computing,
									cloud, dev ops... etc.
								</p>
								<p>Teacher assistant in multiple courses </p>
							</div>
							<div>
								<CategoryHeader>
									<BusinessIcon />

									<h3>Industry Experience</h3>
								</CategoryHeader>
								<p>
									<span>
										KTH Royal Institute of Techology
									</span>
								</p>
								<p>
									Degree program in ICT, Distributed Systems
									and Data Science
								</p>
								<p>
									Experience with distributed computing,
									cloud, dev ops... etc.
								</p>
								<p>Teacher assistant in multiple courses </p>
							</div>
						</div>
						<Link href="/cv">
							<LinkContainer>
								<p>More Info</p>
								<ArrowIcon color={theme.colors.primary_dark} />
							</LinkContainer>
						</Link>
					</CardLayoutQuickFacts>
				</Card>
			</Page>
		)
	}
}

export default index

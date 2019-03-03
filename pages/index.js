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
	flex-flow: row wrap-reverse;
	align-items: flex-start;
	color: white;
	justify-content: center;
	text-align: center;

	@media (min-width: 850px) {
		flex-flow: row nowrap;
		justify-content: inherit;
		text-align: left;
	}

	h1 {
		padding-bottom: 16px;
		border-bottom: 2px solid white;
	}

	div {
		padding: 10px;
	}

	img {
		margin: 50px 0 0;
		border: 2px solid white;
		width: 62%;

		@media (min-width: 850px) {
			margin: 40px;
			width: 32%;
		}
	}
`

const ItalicText = styled.p`
	font-style: italic;
`

const CardLayoutQuickFacts = styled.div`
	> div {
		display: flex;
		flex-wrap: wrap;
		@media (min-width: 850px) {
			flex-wrap: nowrap;
		}

		> div {
			margin: 25px;
			flex: 1 0 0;
			h3 {
				width: 60%;
				margin: 4px 20px;
			}
		}

		> div:first-child {
			padding-right: 30px;
			padding-bottom: 30px;

			border-bottom: 1px solid gray;
			@media (min-width: 850px) {
				border-bottom: 0;
				border-right: 1px solid gray;
			}
		}
	}

	h2 {
		margin-top: 45px;
		text-align: center;
	}

	p {
		/* margin-left: 20px; */
	}
`

const CategoryHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
`

const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	a {
		align-items: center;
		display: flex;
		padding: 20px;
		text-align: center;
		font-weight: 500;
		text-decoration: none;
		color: ${props => props.theme.colors.primary_dark};
		font-size: 22px;
		cursor: pointer;
	}

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
				<Card backgroundImage>
					<CardLayoutMain>
						<div>
							<h1>
								<span>Hannes</span> Rabo
							</h1>
							<ItalicText>
								Hi! I am glad you found your way here.
							</ItalicText>
							<p>
								I am a curious and fast learning computer
								science student with experience as both research
								assistant, teaching assistant as well as
								software developer.
							</p>
							<p>
								Apart from that I am also active as a Scout
								leader and organizer of weekly activities and
								events multiple times every year
							</p>
						</div>
						<img
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
									<SchoolIcon width={30} height={30} />

									<h3>Academic Experience</h3>
								</CategoryHeader>
								<ItalicText>
									KTH Royal Institute of Techology
								</ItalicText>
								<p>
									Degree program in ICT, Distributed Systems
									and Data Science. Experience with
									distributed and cloud computing, and
									software engineering
								</p>
								<p>
									Have been a teachers assistant in two
									courses: "Digital Design" and "Operating
									Systems"
								</p>
							</div>
							<div>
								<CategoryHeader>
									<BusinessIcon width={30} height={30} />

									<h3>Industry Experience</h3>
								</CategoryHeader>
								<ItalicText>
									Software Developer / Engineer
								</ItalicText>
								<p>
									Two years experience as professional
									software developer beside by studies.
								</p>
								<ItalicText>Research Assistant</ItalicText>
								<p>
									Working with statistical simulations for
									phylogenetics.
								</p>
							</div>
						</div>
						<LinkContainer>
							<Link href="/cv">
								<a>
									<p>More Info</p>
									<ArrowIcon
										color={theme.colors.primary_dark}
									/>
								</a>
							</Link>
						</LinkContainer>
					</CardLayoutQuickFacts>
				</Card>
			</Page>
		)
	}
}

export default index

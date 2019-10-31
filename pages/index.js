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
	margin: 25px 0;

	@media (min-width: 850px) {
		flex-flow: row nowrap;
		justify-content: inherit;
		text-align: left;
	}

	h1 {
		padding-bottom: 16px;
		margin-bottom: 40px;
		border-bottom: 2px solid white;
	}

	div {
		padding: 20px;
		margin: 10px 0;
		@media (min-width: 850px) {
			padding: 10px;
			margin: 0;
		}
	}

	img {
		margin: 50px 0 0;
		border: 2px solid white;
		width: 65%;

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
			margin: 20px;
			flex: 1 0 0;
			h3 {
				width: 60%;
				margin: 4px 20px;
			}
		}

		> div:first-child {
			padding-right: 0;
			padding-bottom: 30px;

			border-bottom: 1px solid gray;
			@media (min-width: 850px) {
				padding-right: 40px;
				border-bottom: 0;
				border-right: 1px solid gray;
			}
		}
	}

	h2 {
		margin-top: 45px;
		text-align: center;
	}
`

const CategoryHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	margin-bottom: 30px;
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
								I am a curious and fast learning computer
								science student from KTH with experience both as a research
								assistant, teaching assistant, as well as a software developer.
							</p>
							<p>
								My expected graduation is in May 2020 and I am currently looking for
								an interesting company where I get the oportunity contribute
								towards an amazing product.
							</p>
							<p>
								Outside of the IT field, I am wild life enthusiast and active as a Scout
								leader. I help to organize events for youths both on a weekly basis as well as larger
								events multiple times every year.
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
									Degree program in Information and Communication Technology,
									Master in Software Engineering of Distributed Systems.
								</p>
								<ItalicText>Research Assistant</ItalicText>
								<p>
									Worked with statistical simulations for
									phylogenetics.
								</p>
								<ItalicText>Teachers Assistant</ItalicText>
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
									Software Developer
								</ItalicText>
								<p>
									Two years (part time) experience as professional software developer
									beside by studies for an IP based two-way radio system.
								</p>
								<ItalicText>
									Internship Experience
								</ItalicText>
								<p>
									Worked with payment systems based on GCP at Spotify as an intern.
								</p>
								<p>
									Interned as a web developer for WordPress.
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

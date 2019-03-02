import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

import { theme } from '../Theme'
import SchoolIcon from '../svg/SchoolIcon'

const ExperienceBlockContainer = styled.div`
	display: flex;

	margin: 25px auto 25px;

	> span {
		margin-top: 1px;
	}

	h3.link {
		cursor: pointer;
	}

	h3.link:hover {
		text-decoration: underline;
	}

	hr {
		margin: 0 20px 20px;
		border: 0;
		border-bottom: 1px solid white;
	}

	h3,
	h4,
	p {
		margin: 0 0 20px 20px;

		span {
			display: block;
			margin-top: 15px;
			font-style: italic;
		}
	}

	&:last-child {
		margin-bottom: 15px;
	}
`
// as={`/cv/${experience.key}`}

class ExperienceBlock extends PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		let experience = this.props.experience

		return (
			<ExperienceBlockContainer>
				<SchoolIcon width={24} height={24} color={'black'} />
				<div>
					{this.props.noLink ? (
						<h3>{experience.title}</h3>
					) : (
						<Link href={`/experience?id=${experience.key}`}>
							<a>
								<h3 className="link">{experience.title}</h3>
							</a>
						</Link>
					)}

					<h4>{experience.company}</h4>
					{this.props.noDate ? (
						''
					) : (
						<p>
							{experience.start_month} {experience.start_year} -{' '}
							{experience.end_year !== 'Present'
								? experience.end_month
								: ''}{' '}
							{experience.end_year}
						</p>
					)}
					{this.props.small ? '' : <hr />}
					{this.props.small ? '' : <p>{experience.description}</p>}
					<ul>
						{experience.important_points.map((el, key) => {
							return <li key={key}>{el}</li>
						})}
					</ul>
				</div>
			</ExperienceBlockContainer>
		)
	}
}

ExperienceBlock.propTypes = {
	experience: PropTypes.any.isRequired
}

export default ExperienceBlock

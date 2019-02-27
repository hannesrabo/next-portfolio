import { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ExperienceBlock from './ExperienceBlock'

const YearBlock = styled.div`
	display: flex;
	color: ${props => props.theme.colors.primary_dark};
	margin: 20px;
	padding: 20px 0;

	h2 {
		display: block;
		margin: 0 60px 0 0;
	}

	border-bottom: 1px solid gray;

	&:last-child {
		border: 0;
		margin-bottom: 0;
	}
`

class ExperienceListing extends PureComponent {
	constructor(props) {
		super(props)
	}
	render() {
		let experiences = this.props.experiences
		let yearMap = {}
		let lowestYear = 99999

		experiences.forEach(exp => {
			if (yearMap[exp.start_year] === undefined)
				yearMap[exp.start_year] = []
			yearMap[exp.start_year].push(exp)
			if (exp.start_year < lowestYear) lowestYear = exp.start_year
		})

		return (
			<div>
				{Object.keys(yearMap)
					.reverse()
					.map((year, index) => (
						<YearBlock key={index}>
							<h2>{year}</h2>
							<div>
								{yearMap[year].map((exp, exp_key) => {
									return (
										<ExperienceBlock
											key={exp.key}
											experience={exp}
										/>
									)
								})}
							</div>
						</YearBlock>
					))}
			</div>
		)
	}
}

ExperienceListing.protoTypes = {
	experiences: PropTypes.any.isRequired
}

export default ExperienceListing
import { PureComponent } from 'react'
import { Card } from '../Card'
import styled from 'styled-components'

const FooterContainer = styled.footer`
	margin-bottom: 0;

	@media (min-width: 850px) {
		margin-bottom: 60px;
	}
`

const AlignedText = styled.p`
	text-align: right;
	color: white;
	font-size: 12px;
	padding: 20px 0 0 20px;
`

class Footer extends PureComponent {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<FooterContainer>
				<Card color={this.props.color} backgroundImage noSpacer>
					<AlignedText>
						Copyright and Design by Hannes Rabo 2019 &copy;
					</AlignedText>
				</Card>
			</FooterContainer>
		)
	}
}

export default Footer

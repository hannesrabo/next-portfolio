import { PureComponent } from 'react'
import { Card } from '../Card'
import styled from 'styled-components'

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
			<footer>
				<Card color={this.props.color} backgroundImage>
					<AlignedText>
						Copyright and Design by Hannes Rabo 2019 &copy;
					</AlignedText>
				</Card>
			</footer>
		)
	}
}

export default Footer

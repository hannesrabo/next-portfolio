import { PureComponent } from 'react'
import { Card } from '../Card'
import styled from 'styled-components'

const AlignedText = styled.p`
	text-align: right;
	color: white;
	font-size: 22px;
`

class Footer extends PureComponent {
	// constructor(props) {
	//     super(props);
	//     this.state = {  };
	// }
	render() {
		return (
			<footer>
				<Card>
					<AlignedText>
						Copyright and Design by Hannes Rabo 2019 &copy;
					</AlignedText>
				</Card>
			</footer>
		)
	}
}

export default Footer

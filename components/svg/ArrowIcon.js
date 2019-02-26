import { PureComponent } from 'react'
import { IconContainer } from './IconContainer'

class ArrowIcon extends PureComponent {
	render() {
		let width = this.props.width ? this.props.width : '24'
		let height = this.props.height ? this.props.height : '24'

		return (
			<IconContainer {...this.props} width={width} height={height}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox="0 0 24 24"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
				</svg>
			</IconContainer>
		)
	}
}

export default ArrowIcon

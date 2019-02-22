import styled from 'styled-components'

export const IconContainer = styled.span`
	position: relative;
	width: 35px;
	height: 35px;
	svg {
		width: 100%;
		height: 100%;
		position: absolute;
		${props => (props.color !== undefined ? `fill: ${props.color};` : '')}
	}
`

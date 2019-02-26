import styled from 'styled-components'

export const IconContainer = styled.span`
	position: relative;
	width: ${props => props.width}px;
	height: ${props => props.height}px;
	svg {
		width: 100%;
		height: 100%;
		position: absolute;
		${props => (props.color !== undefined ? `fill: ${props.color};` : '')}
	}
`

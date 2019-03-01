import styled from 'styled-components'

export const Card = styled.div`
	background-color: ${props =>
		props.color ? props.color : props.theme.colors.primary};
	margin: 0 auto ${props => (props.noSpacer ? '0' : '60px')};
	${props => (props.noShadow ? '' : 'box-shadow: 2px 2px 8px #aaa;')}
	padding: 8px 20px;
	border: 1px solid lightgray;
	box-sizing: border-box;
`

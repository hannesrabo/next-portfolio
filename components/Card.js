import styled from 'styled-components'

export const Card = styled.div`
	${props =>
		props.backgroundImage
			? ` background-image: url(/static/background/abstract-tree-top-w.svg);
				background-color: #6f8b70;
				background-repeat: no-repeat;
				background-position: right;
				background-size: 58%;`
			: ''}
	${props => (props.largeBackground ? 'background-size: 80%;' : '')}
	background-color: ${props =>
		props.color ? props.color : props.theme.colors.primary};
	margin: 0 auto ${props => (props.noSpacer ? '0' : '60px')};
	${props => (props.noShadow ? '' : 'box-shadow: 2px 3px 5px 1px #00000040;')}
	padding: 8px 20px;
	box-sizing: border-box;
`

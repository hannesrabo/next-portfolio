import styled from 'styled-components'

export const Card = styled.div`
	background-color: ${props =>
		props.light === undefined
			? props.theme.colors.primary
			: props.theme.colors.primary_light};
	margin: 0 auto 60px;
	box-shadow: 2px 2px 8px #aaa;
	padding: 8px 20px;
	border: 1px solid lightgray;
	box-sizing: border-box;
`

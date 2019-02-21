import styled from 'styled-components'

export const NavBar = styled.nav`
	width: 40%;

	ul {
		display: flex;
		list-style: none;
		flex-flow: row wrap;
		justify-content: center;
		padding: 0;

		li {
			text-align: center;
			display: block;
			flex: 1;
			position: relative;
		}
	}
`

export const SectionTitle = styled.li`
	font-size: 15px;
	line-height: 1.3;
	position: relative;

	a {
		padding: 15px 5px;
		display: block;
		text-decoration: none;
		color: ${props => props.theme.colors.text};
		${props =>
			props.active
				? `border-bottom: 2px solid ${props.theme.colors.text};`
				: ''};
	}
`

// ${props =>
// props.active
// 	? props.theme.colors.secondary
// 	: props.theme.colors.primary};

import styled from 'styled-components'

import { theme } from '../Theme'

export const NavBar = styled.nav`
	width: 100%;
	margin-left: auto;

	@media (min-width: 850px) {
		width: 40%;
	}

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
		padding: 8px;
		font-size: 20px;
		display: block;
		text-decoration: none;
		/* transition: transform 0.6s; */
		/* ${props => props.active && 'transform: translateY(1px);'} */
		color: ${props =>
			props.active
				? `${theme.colors.text_bold}`
				: `${theme.colors.text}`};
	}
	&:last-child::before {
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100%;
		height: 2px;
		background: ${theme.colors.text};
		content: '';
		transition: transform 0.2s;

		transform: translate3D(
			-${props => props.numberOfTabs - props.activeIndex - 1}00%, 0, 0
		);
	}
`

// export const SectionTitle = styled.li`
// 	font-size: 15px;
// 	line-height: 1.3;
// 	position: relative;

// 	a {
// 		padding: 8px;
// 		font-size: 20px;
// 		display: block;
// 		text-decoration: none;
// 		color: ${props =>
// 			props.active
// 				? `${theme.colors.text_bold}`
// 				: `${theme.colors.text}`};
// 		${props =>
// 			props.active
// 				? `border-bottom: 2px solid ${theme.colors.text};`
// 				: ''}
// 	}
// `

// ${props =>
// props.active
// 	? props.theme.colors.secondary
// 	: props.theme.colors.primary};

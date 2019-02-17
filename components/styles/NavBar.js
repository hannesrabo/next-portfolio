import styled from 'styled-components'

export const NavBar = styled.nav`
	color: ${props => props.theme.colors.gray};

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
	padding: 20px 10px;
	font-size: 15px;
	color: ${props =>
		props.active
			? props.theme.colors.secondary
			: props.theme.colors.primary};
	line-height: 1.3;
	cursor: pointer;
	position: relative;

	a {
		display: block;
		transition: transform 0.3s;
		${props => props.active && 'transform: translateY(4px);'}
	}

	&:last-child::before {
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100%;
		height: 2px;
		background: ${props => props.theme.colors.secondary};
		content: '';
		transition: transform 0.3s;

		transform: translateX(
			-${props => props.numberOfTabs - props.activeIndex - 1}00%
		);
	}
`

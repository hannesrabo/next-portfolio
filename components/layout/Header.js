import { PureComponent } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Router from 'next/router'

import { navigation_sections } from '../../data/nav'
import { NavBar, SectionTitle } from './NavBar'
import ArrowIcon from '../svg/ArrowIcon'

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const BackArrow = styled.div`
	width: 35px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding-bottom: 15px;
	cursor: pointer;
`

class Header extends PureComponent {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {  };
	// }
	render() {
		return (
			<HeaderContainer>
				{this.props.backTo ? (
					<BackArrow
						onClick={() => {
							Router.push(this.props.backTo)
						}}
					>
						<ArrowIcon flipX />
					</BackArrow>
				) : (
					''
				)}

				<NavBar>
					<ul>
						{navigation_sections.map(({ title, path }, i) => (
							<SectionTitle
								key={i}
								active={this.props.currentPage === path}
							>
								<Link href={path} prefetch shallow>
									<a>{title}</a>
								</Link>
							</SectionTitle>
						))}
					</ul>
				</NavBar>
			</HeaderContainer>
		)
	}
}

export default Header

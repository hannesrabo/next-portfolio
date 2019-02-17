import styled from 'styled-components'
import ProfileCard from './ProfileCard'

const HeaderBackground = styled.div`
	background-color: #edc98a;
	height: 400px;
`

const Header = () => (
	<>
		<HeaderBackground />
		<ProfileCard />
	</>
)

export default Header

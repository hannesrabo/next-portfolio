import { ThemeProvider } from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'

const theme = {
	colors: {
		white: '#fff',
		primary: '#67a2ce',
		secondary: '#edc98a'
	}
}

const Page = props => (
	<ThemeProvider theme={theme}>
		<div>
			<Meta />
			<Header />
			<>{props.children}</>
		</div>
	</ThemeProvider>
)

export default Page

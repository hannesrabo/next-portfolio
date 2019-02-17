import { ThemeProvider } from 'styled-components'
import Meta from '../components/Meta'

const theme = {
	colors: {
		white: '#fff',
		primary: '#000',
		secondary: '#aaa'
	}
}

const Page = props => (
	<ThemeProvider theme={theme}>
		<div>
			<Meta />
			<>{props.children}</>
		</div>
	</ThemeProvider>
)

export default Page

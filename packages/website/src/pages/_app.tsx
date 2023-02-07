import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/Store'
import { ConnectionProvider } from '../components/ConnectionProvider'
import '../styles/globals.css'
import { Footer } from '../components/pageLayout/Footer'
import { theme } from '../theme'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<ConnectionProvider>
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</ConnectionProvider>
		</Provider>
	)
}

export default App

import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/Store'
import { ConnectionProvider } from '../components/ConnectionProvider'
import { theme } from '../theme'
import { ChakraProvider } from '@chakra-ui/react'
import { WagmiProvider } from '../components/RainbowKit'

const App = ({ Component, pageProps }) => {
	return (
		<WagmiProvider>
			<Provider store={store}>
				<ConnectionProvider>
					<ChakraProvider theme={theme}>
						<Component {...pageProps} />
					</ChakraProvider>
				</ConnectionProvider>
			</Provider>
		</WagmiProvider>
	)
}

export default App

import '../styles/globals.css'

import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

import store from '../redux/Store'
import { theme } from '../theme'
import { WagmiProvider } from '../components/RainbowKit'

const App = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<WagmiProvider>
					<Component {...pageProps} />
				</WagmiProvider>
			</ChakraProvider>
		</Provider>
	)
}

export default App

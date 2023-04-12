import '@rainbow-me/rainbowkit/styles.css'
import {
	getDefaultWallets,
	RainbowKitProvider,
	AvatarComponent,
} from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, goerli } from 'wagmi/chains'
import Jazzicon from 'react-jazzicon'

const { chains, provider } = configureChains(
	[mainnet, goerli],
	[publicProvider()]
)

const { connectors } = getDefaultWallets({
	appName: 'Diva App',
	chains,
})

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
})

export const WagmiProvider = ({ children }) => {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider avatar={CustomAvatar} chains={chains}>
				{children}
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
	return <Jazzicon diameter={88} seed={Number(address)} />
}

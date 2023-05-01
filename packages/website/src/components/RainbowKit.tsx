import '@rainbow-me/rainbowkit/styles.css'
import {
	AvatarComponent,
	getDefaultWallets,
	RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import Jazzicon from 'react-jazzicon'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import React from 'react'

const { chains, provider, webSocketProvider } = configureChains(
	[goerli],
	[infuraProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
)

const { connectors } = getDefaultWallets({
	appName: 'DIVA App',
	projectId: '3b71d8be5f6ba6ab0f5dcd6815d21d1c',
	chains,
})

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
	webSocketProvider,
})

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
	return <Jazzicon diameter={88} seed={Number(address)} />
}

export const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider avatar={CustomAvatar} chains={chains}>
				{children}
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

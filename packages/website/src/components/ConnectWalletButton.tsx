import { getShortenedAddress } from '../util/getShortenedAddress'
import { Button } from './ui/Button'
import { useAccount } from 'wagmi'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'

export function ConnectWalletButton() {
	const { address, isConnected } = useAccount()
	const { openConnectModal } = useConnectModal()
	const { openAccountModal } = useAccountModal()

	return (
		<Button
			primary={isConnected ? false : true}
			onClick={isConnected ? openAccountModal : openConnectModal}
			className="ml-4 justify-center items-center"
			innerClassName="">
			{isConnected ? getShortenedAddress(address) : 'Connect Wallet'}
		</Button>
	)
}

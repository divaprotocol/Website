import { getShortenedAddress } from '../util/getShortenedAddress'
import { Button } from './ui/Button'
import { useAccount } from 'wagmi'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { Stack } from '@chakra-ui/react'

export function ConnectWalletButton() {
	const { address, isConnected } = useAccount()
	const { openConnectModal } = useConnectModal()
	const { openAccountModal } = useAccountModal()

	return (
		<Stack flexDirection={'row'} justify={'center'} alignItems={'center'}>
			<Button
				primary={isConnected ? false : true}
				onClick={isConnected ? openAccountModal : openConnectModal}
				className="ml-4 justify-center items-center"
				innerClassName="">
				{isConnected
					? getShortenedAddress(address as string)
					: 'Connect Wallet'}
			</Button>
		</Stack>
	)
}

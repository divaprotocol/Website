import { getShortenedAddress } from '../util/getShortenedAddress'
import { Button } from './ui/Button'
import { useAccount, useNetwork } from 'wagmi'
import {
	useConnectModal,
	useAccountModal,
	useChainModal,
} from '@rainbow-me/rainbowkit'
import { Stack, useToast } from '@chakra-ui/react'

export function ConnectWalletButton() {
	const { address, isConnected } = useAccount()
	const { openConnectModal } = useConnectModal()
	const { openAccountModal } = useAccountModal()
	const { openChainModal } = useChainModal()
	const { chain } = useNetwork()

	return (
		<Stack flexDirection={'row'} justify={'center'} alignItems={'center'}>
			{chain?.unsupported === true ? (
				<Button
					onClick={openChainModal}
					className="ml-4 justify-center items-center bg-red-500 font-serif"
					innerClassName="bg-[#ff494a]/30">
					Wrong Network
				</Button>
			) : (
				<Button
					primary={isConnected ? false : true}
					onClick={isConnected ? openAccountModal : openConnectModal}
					className="ml-4 justify-center items-center font-serif"
					innerClassName="">
					{isConnected
						? getShortenedAddress(address as string)
						: 'Connect Wallet'}
				</Button>
			)}
		</Stack>
	)
}

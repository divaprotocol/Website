import { getShortenedAddress } from '../util/getShortenedAddress'
import { Button } from './ui/Button'
import { useAccount, useNetwork } from 'wagmi'
import {
	useConnectModal,
	useAccountModal,
	useChainModal,
} from '@rainbow-me/rainbowkit'
import { Stack } from '@chakra-ui/react'

export function ConnectWalletButton() {
	const { address, isConnected } = useAccount()
	const { openConnectModal } = useConnectModal()
	const { openAccountModal } = useAccountModal()
	const { openChainModal } = useChainModal()
	const { chain } = useNetwork()

	return (
		<Stack
			flexDirection={'row'}
			alignItems={'center'}
			gap={2}
			className="ml-2 justify-center items-center">
			{chain?.unsupported === true ? (
				<Button
					primary
					onClick={openChainModal}
					className="justify-center items-center  font-serifs"
					innerClassName="bg-[#ff494a]/30"
					style={{
						backgroundImage: 'linear-gradient(to left, #EF4444, #F87171)',
					}}>
					Wrong Network
				</Button>
			) : (
				<Button
					primary={isConnected ? false : true}
					onClick={isConnected ? openAccountModal : openConnectModal}
					className="ml-4 justify-center items-center font-serif "
					innerClassName="mt-0"
					style={{
						marginTop: 0,
					}}>
					{isConnected
						? getShortenedAddress(address as string)
						: 'Connect Wallet'}
				</Button>
			)}
		</Stack>
	)
}

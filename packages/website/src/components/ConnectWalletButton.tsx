import { useMediaQuery } from '@chakra-ui/react'
import { useConnectionContext } from '../hooks/useConnectionContext'
import { selectChainId, selectUserAddress } from '../redux/appSlice'
import { useAppSelector } from '../redux/hooks'
import { getShortenedAddress } from '../util/getShortenedAddress'
import { Button } from './ui/Button'

export function ConnectWalletButton() {
	const { isConnected, disconnect, connect } = useConnectionContext()
	const userAddress = useAppSelector(selectUserAddress)
	const chainId = useAppSelector(selectChainId)

	return (
		<Button
			primary={isConnected ? false : true}
			onClick={() => (isConnected && userAddress ? disconnect() : connect())}
			className="ml-4 justify-center items-center"
			innerClassName="">
			{isConnected && userAddress
				? getShortenedAddress(userAddress)
				: 'Connect Wallet'}
		</Button>
	)
}

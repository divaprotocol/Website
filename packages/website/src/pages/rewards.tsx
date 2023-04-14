import { useEffect, useState } from 'react'
import { Alert, AlertIcon, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import Jazzicon from 'react-jazzicon'
import { ExternalLinkIcon } from '@chakra-ui/icons'

/**
 * TODO: load rewards via ajax
 */
import PageLayout from '../components/pageLayout/PageLayout'
import { Heading } from '../components/typography/Heading'
import { Paragraph } from '../components/typography/Paragraph'
import { Highlight } from '../components/typography/Highlight'
import { getShortenedAddress } from '../util/getShortenedAddress'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const RewardPageBlobs = () => (
	<>
		<div
			style={{
				position: 'absolute',
				width: '726px',
				height: '594px',
				left: '1304px',
				top: 'calc(50% - 594px/2 + 46px)',
				background:
					'linear-gradient(116.38deg, rgba(0, 56, 255, 0.2) 6.37%, rgba(22, 227, 216, 0.2) 89.66%)',
				filter: 'blur(131.902px)',
				transform: 'matrix(-1, 0, 0, 1, 0, 0)',
			}}
			className="hidden md:block"></div>
		<div
			style={{
				position: 'absolute',
				width: '402px',
				height: '329px',
				left: '0px',
				top: 'calc(50% - 329px/2 + 93.5px)',
				background:
					'linear-gradient(116.38deg, rgba(0, 56, 255, 0.3) 6.37%, rgba(22, 227, 216, 0.3) 89.66%)',
				filter: 'blur(131.902px)',
				transform: 'matrix(-1, 0, 0, 1, 0, 0)',
			}}></div>
		<div
			style={{
				position: 'absolute',
				width: '402px',
				height: '329px',
				left: '821px',
				top: 'calc(50% - 329px/2 - 179.5px)',
				background:
					'linear-gradient(116.38deg, rgba(0, 56, 255, 0.3) 6.37%, rgba(22, 227, 216, 0.3) 89.66%)',
				filter: 'blur(131.902px)',
				transform: 'matrix(-1, 0, 0, 1, 0, 0)',
			}}
			className="hidden md:block"></div>
	</>
)

const TokenClaimInfo = ({ userAddress, rewardInfo }) => (
	<Card className="w-[500px] min-h-[498px] px-0 py-0 font-sans">
		<Stack
			direction={'row'}
			alignItems={'center'}
			className="p-6 rounded-3xl"
			style={{
				backgroundColor: 'rgba(255, 255, 255, 0.06)',
			}}
			gap={5}>
			<div className="border-2 rounded-full overflow-hidden flex justify-center items-center p-1">
				<Jazzicon diameter={88} seed={userAddress} />
			</div>
			<div className="text-xl ">{getShortenedAddress(userAddress)}</div>
		</Stack>
		<Stack className="m-8 font-sans" gap={3}>
			<Stack direction={'row'} justify={'space-between'}>
				<div className="opacity-50">Early Contributor/backer</div>
				<div>-</div>
			</Stack>
			<Stack direction={'row'} justify={'space-between'}>
				<div className="opacity-50">Testnet</div>
				<div>{rewardInfo.reward.toFixed(1)}</div>
			</Stack>
			<Stack direction={'row'} justify={'space-between'}>
				<div className="opacity-50">Launch partner</div>
				<div>-</div>
			</Stack>
			<Stack direction={'row'} justify={'space-between'}>
				<div className="opacity-50">Quiz</div>
				<div>-</div>
			</Stack>
			<Stack direction={'row'} justify={'space-between'}>
				<div className="opacity-50">DIVA Donate</div>
				<div>-</div>
			</Stack>
			<Stack direction={'row'} justify={'space-between'}>
				<div className="opacity-50">888Whales holder</div>
				<div>-</div>
			</Stack>
			<Stack direction={'row'} justify={'space-between'}>
				<div className="opacity-50">Other contributions/activity</div>
				<div>-</div>
			</Stack>
			<Stack direction={'row'} justify={'space-between'}>
				<div className="opacity-50">Ethereum ecosystem</div>
				<div>-</div>
			</Stack>
		</Stack>
		<Stack
			direction={'row'}
			justify={'space-between'}
			className="m-8 mt-4 border-t-[1px] pt-6 border-white/5">
			<div className="opacity-50">$DIVA</div>
			<div>{rewardInfo.reward.toFixed(1)}</div>
		</Stack>

		<Stack className="m-8">
			<Button primary className="justify-center">
				Rewards available after token launch
			</Button>
		</Stack>
	</Card>
)

const Rewards = () => {
	const [rewardInfo, setRewardInfo] = useState<any>({})
	const [rewards, setRewards] = useState<any[]>([])

	const { address: userAddress } = useAccount()

	useEffect(() => {
		const get = async () => {
			const res = await fetch(`/api/rewards/${userAddress}`, {
				method: 'GET',
			})
			const json = await res.json()
			setRewards(json)
		}
		get()
	}, [userAddress])

	useEffect(() => {
		;(rewards as any[]).forEach((reward) => {
			if (
				userAddress &&
				reward.address.toLowerCase() === userAddress.toLowerCase()
			) {
				setRewardInfo(reward)
			}
		})
	}, [rewards, userAddress])

	return (
		<PageLayout>
			<Stack
				style={{
					flexDirection: 'column',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'center',
					color: 'white',
					textAlign: 'center',
					zIndex: 10,
				}}
				minHeight={['90vh']}
				spacing={8}
				marginTop={rewardInfo.reward !== '' ? 20 : 0}
				className="overflow-hidden">
				<div className="z-10">
					<Stack className="justify-center items-center">
						<Image
							src="/icons/DivaTokenClaim.svg"
							alt="diavToken"
							height={128}
							width={127}
							className="mb-10"
						/>
					</Stack>
					<Heading as="h2" size="lg">
						$DIVA Token
						<Highlight> Claim</Highlight>
					</Heading>
					<Paragraph className="mt-8 opacity-60 ">
						$DIVA is the new governance token for DIVA Protocol DAO. Connect
						your wallet to determine your eligibility.
						<a
							href="https://www.divaprotocol.io/posts/diva-tokenomics"
							className="hover:underline"
							target="_blank"
							rel="noreferrer">
							Learn more
							<ExternalLinkIcon />
						</a>
					</Paragraph>
				</div>
				{userAddress === undefined && (
					<>
						<Paragraph>
							Connect your wallet to determine your eligibility.
						</Paragraph>
					</>
				)}
				{userAddress !== undefined && rewardInfo == null && (
					<div>
						<Alert
							status="error"
							variant="subtle"
							className="text-black rounded-xl">
							<AlertIcon />
							Connected account was not registered for the testnet
						</Alert>
					</div>
				)}

				{userAddress !== undefined && rewardInfo.reward === '' && (
					<div>
						<div className="rounded-xl bg-[#472709] px-10 py-2 text-[#F2994A]">
							{'You are not eligible. Reason: ' + rewardInfo.comment}
						</div>
					</div>
				)}

				{userAddress !== undefined && rewardInfo.reward === undefined && (
					<div>
						<Alert
							status="error"
							variant="subtle"
							className="text-black rounded-xl">
							<AlertIcon />
							<Paragraph>You were not registered</Paragraph>
						</Alert>
					</div>
				)}
				{userAddress !== undefined &&
					rewardInfo.reward !== undefined &&
					rewardInfo.reward !== '' && (
						<TokenClaimInfo userAddress={userAddress} rewardInfo={rewardInfo} />
					)}

				{userAddress !== undefined &&
					rewardInfo.reward !== undefined &&
					rewardInfo.reward !== '' && (
						<Stack className="m-8 font-sans w-[450px]" gap={3}>
							<Stack direction={'row'} justify={'space-between'}>
								<div className="opacity-50">Subject to linear vesting</div>
								<div>-</div>
							</Stack>

							<Stack direction={'row'} justify={'space-between'}>
								<div className="opacity-50">Vesting duration</div>
								<div>-</div>
							</Stack>
						</Stack>
					)}
			</Stack>
			<RewardPageBlobs />
		</PageLayout>
	)
}

export default Rewards

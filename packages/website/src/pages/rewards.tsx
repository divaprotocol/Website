import { useCallback, useEffect, useMemo, useState } from 'react'
import { Alert, AlertIcon, Stack, Tooltip } from '@chakra-ui/react'
import { BigNumber, ethers } from 'ethers'
import { isAddress, parseUnits } from 'ethers/lib/utils'
import { useToast, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import Jazzicon from 'react-jazzicon'

import ClaimDivaLinearVestingABI from '../abi/ClaimDivaLinearVestingABI.json'
import { config, DIVA_TOKEN_DECIMALS, ZERO_BIGNUMBER } from '../constants'
import { addThousandSeparators, toStringFixed } from '../util/bn'

/**
 * TODO: load rewards via ajax
 */
import PageLayout from '../components/pageLayout/PageLayout'
import { ConnectWalletButton } from '../components/ConnectWalletButton'
import { Heading } from '../components/typography/Heading'
import { Paragraph } from '../components/typography/Paragraph'
import { Highlight } from '../components/typography/Highlight'
import { useAccount, useNetwork, useSigner } from 'wagmi'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { getShortenedAddress } from '../util/getShortenedAddress'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { RewardObject } from '../types/index'
import { useChainModal } from '@rainbow-me/rainbowkit'

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

const TokenClaimInfo = ({
	userAddress,
	rewardInfo,
	claimable,
	claim,
	isClaiming,
	claimableAmount,
	claimedAmount,
}) => {
	const initialRewardByCategory = {
		'Early contributor/backer': {
			reward: 0,
			comment: '',
		},
		Testnet: {
			reward: 0,
			comment: '',
		},
		'Launch partner': {
			reward: 0,
			comment: '',
		},
		Quiz: {
			reward: 0,
			comment: '',
		},
		'DIVA Donate': {
			reward: 0,
			comment: '',
		},
		'888Whales holder': {
			reward: 0,
			comment: '',
		},
		'Other contributions/activity': { reward: 0, comment: '' },
		'Ethereum ecosystem': { reward: 0, comment: '' },
	}
	const [rewardByCategory, setRewardByCategory] = useState(
		initialRewardByCategory
	)
	const { chain } = useNetwork()
	const { openChainModal } = useChainModal()

	// merging same category into one
	function mergeRewardsByCategory(arr: RewardObject[]): RewardObject[] {
		const merged: { [category: string]: RewardObject } = {}

		for (const obj of arr) {
			if (merged[obj.category]) {
				merged[obj.category].reward += obj.reward
			} else {
				merged[obj.category] = { ...obj }
			}
		}
		return Object.values(merged)
	}

	useEffect(() => {
		setRewardByCategory(initialRewardByCategory)

		if (rewardInfo.detailUserReward) {
			mergeRewardsByCategory(rewardInfo.detailUserReward).map(
				({ category, reward, comment }) => {
					setRewardByCategory((rewardByCategory) => {
						rewardByCategory[category].reward = reward
						rewardByCategory[category].comment = comment

						return rewardByCategory
					})
				}
			)
		}
	}, [rewardInfo, userAddress])

	return (
		<Card className="md:w-[500px] min-h-[498px] px-0 py-0 font-sans">
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
				{Object.entries(rewardByCategory).map(
					([category, { reward, comment }]) => (
						<Stack direction={'row'} justify={'space-between'} key={category}>
							<Stack
								direction={'row'}
								alignItems={'center'}
								className="opacity-50">
								<div>{category}</div>
								{category === 'Testnet' && reward === 0 && comment !== '' && (
									<Tooltip
										label={comment}
										aria-label={comment}
										hasArrow
										className="font-sans opacity-50">
										<InfoOutlineIcon />
									</Tooltip>
								)}
							</Stack>
							{reward > 0 ? (
								<div>{addThousandSeparators(reward)}</div>
							) : (
								<div>-</div>
							)}
						</Stack>
					)
				)}
			</Stack>

			<Stack className="m-8 mt-4 border-t-[1px] pt-6 border-white/5" gap={3}>
				<Stack direction={'row'} justify={'space-between'} className="text-xl">
					<div className="opacity-50">$DIVA</div>
					<div>{addThousandSeparators(rewardInfo.reward.toFixed(1))}</div>
				</Stack>
				<Stack direction={'row'} justify={'space-between'}>
					<div className="opacity-50">You already claimed:</div>
					<div>
						{addThousandSeparators(
							toStringFixed(claimedAmount, DIVA_TOKEN_DECIMALS, 4)
						)}
					</div>
				</Stack>
				<Stack direction={'row'} justify={'space-between'}>
					<div className="opacity-50">Unclaimed amount:</div>
					<div>
						{addThousandSeparators(
							rewardInfo.reward -
								Number(toStringFixed(claimedAmount, DIVA_TOKEN_DECIMALS, 4))
						)}
					</div>
				</Stack>
				<Stack direction={'row'} justify={'space-between'}>
					<div className="opacity-50">Claimable amount:</div>
					<div>
						{addThousandSeparators(
							toStringFixed(claimableAmount, DIVA_TOKEN_DECIMALS, 4)
						)}
					</div>
				</Stack>
			</Stack>

			<Stack className="m-8">
				{chain?.unsupported ? (
					<Button
						primary
						className="justify-center from-red-700 to-red-400"
						onClick={openChainModal}>
						{`Switch to Goerli`}
					</Button>
				) : (
					<Button
						primary
						className="justify-center"
						onClick={() => claim()}
						disabled={claimableAmount.eq(0)}
						isLoading={isClaiming}>
						{claimable ? 'Claim' : '	Rewards available after token launch'}
					</Button>
				)}
			</Stack>
		</Card>
	)
}

const Rewards = () => {
	const { address: userAddress } = useAccount()
	const { chain } = useNetwork()
	const { data: signer, isError, isLoading } = useSigner()
	const [rewardInfo, setRewardInfo] = useState<any>({})
	const [proof, setProof] = useState<string[]>([])
	const [isClaiming, setIsClaiming] = useState<boolean>(false)
	const [trigger, setTrigger] = useState<boolean>(false)
	const [claimedAmount, setClaimedAmount] = useState<BigNumber>(
		BigNumber.from(-1)
	)
	const [availableDrawDownAmount, setAvailableDrawDownAmount] =
		useState<BigNumber>(ZERO_BIGNUMBER)
	const [claimPeriodStarts, setClaimPeriodStarts] = useState<number>(0)
	const [count, setCount] = useState<number>(0)
	const toast = useToast()

	useEffect(() => {
		setCount((count) => count + 1)
		const interval = setInterval(() => {
			setCount((count) => count + 1)
		}, 15000)
		return () => clearInterval(interval)
	}, [])

	const claimDivaLinearVesting = useMemo(
		() =>
			signer && chain?.id && config[chain?.id]?.claimDivaLinearVestingAddress
				? new ethers.Contract(
						config[chain?.id]?.claimDivaLinearVestingAddress,
						ClaimDivaLinearVestingABI,
						signer
				  )
				: null,
		[chain, signer]
	)

	const rewardBN = useMemo(
		() =>
			rewardInfo && rewardInfo.reward
				? parseUnits(rewardInfo.reward.toString() || '0', DIVA_TOKEN_DECIMALS)
				: ZERO_BIGNUMBER,
		[rewardInfo]
	)

	const immediateClaimableAmount = useMemo(
		() => rewardBN?.mul(40).div(100),
		[rewardBN]
	)

	const currentTimestamp = useMemo(() => Math.floor(+new Date() / 1000), [])

	const claimableAmount = useMemo(
		() =>
			currentTimestamp <= claimPeriodStarts
				? ZERO_BIGNUMBER
				: currentTimestamp > claimPeriodStarts + rewardInfo.time
				? rewardBN?.sub(claimedAmount)
				: claimedAmount.gt(0)
				? availableDrawDownAmount
				: claimedAmount.eq(0)
				? immediateClaimableAmount?.add(availableDrawDownAmount)
				: ZERO_BIGNUMBER,
		[
			availableDrawDownAmount,
			immediateClaimableAmount,
			claimedAmount,
			currentTimestamp,
			claimPeriodStarts,
			rewardBN,
			rewardInfo,
		]
	)

	const claimable = useMemo(
		() =>
			rewardBN &&
			claimDivaLinearVesting &&
			trigger &&
			claimPeriodStarts &&
			currentTimestamp &&
			currentTimestamp > claimPeriodStarts,
		[
			rewardBN,
			claimDivaLinearVesting,
			trigger,
			claimPeriodStarts,
			currentTimestamp,
		]
	)

	// fetching the reward info from API
	useEffect(() => {
		const get = async () => {
			const res = await fetch(`/api/rewards/${userAddress}`, {
				method: 'GET',
			})
			if (res.status === 200) {
				const json = await res.json()
				setRewardInfo(json.userReward)
				setProof(json.proof)
			}
		}
		if (isAddress(userAddress)) {
			get()
		}
	}, [userAddress])

	useEffect(() => {
		const getTrigger = async () => {
			setTrigger(await claimDivaLinearVesting.trigger())
		}
		const getClaimPeriodStarts = async () => {
			setClaimPeriodStarts(
				(await claimDivaLinearVesting.claimPeriodStarts()).toNumber()
			)
		}
		if (claimDivaLinearVesting) {
			Promise.all([getTrigger(), getClaimPeriodStarts()])
		}
	}, [claimDivaLinearVesting, count])

	useEffect(() => {
		const getClaimedAmount = async () => {
			setClaimedAmount(await claimDivaLinearVesting.claimedAmount(userAddress))
		}
		if (claimDivaLinearVesting && userAddress) {
			getClaimedAmount()
		}
	}, [claimDivaLinearVesting, userAddress, count])

	useEffect(() => {
		const getAvailableDrawDownAmount = async () => {
			setAvailableDrawDownAmount(
				await claimDivaLinearVesting.availableDrawDownAmount(
					rewardBN,
					rewardBN.sub(immediateClaimableAmount),
					rewardInfo.time,
					userAddress
				)
			)
		}
		if (
			claimDivaLinearVesting &&
			userAddress &&
			rewardBN.gt(0) &&
			immediateClaimableAmount
		) {
			getAvailableDrawDownAmount()
		}
	}, [
		claimDivaLinearVesting,
		userAddress,
		rewardBN,
		immediateClaimableAmount,
		count,
		rewardInfo,
	])

	const claim = useCallback(async () => {
		if (claimable && claimableAmount.gt(0)) {
			setIsClaiming(true)
			try {
				const tx = await claimDivaLinearVesting.claimTokens(
					rewardBN,
					rewardInfo.time,
					proof
				)
				await tx.wait()
				setCount((count) => count + 1)
			} catch (error) {
				toast({
					title: 'Failed to claim.',
					status: 'error',
					position: 'bottom-right',
					duration: 4000,
					isClosable: true,
					variant: 'top-accent',
				})
				console.error(error)
			}
			setIsClaiming(false)
		}
	}, [
		claimable,
		claimableAmount,
		rewardBN,
		rewardInfo.time,
		proof,
		claimDivaLinearVesting,
		toast,
	])

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
					{userAddress === undefined && (
						<>
							<Paragraph className="mt-8 opacity-60 ">
								$DIVA is the governance token of DIVA Protocol. Connect your
								wallet to determine your eligibility.
							</Paragraph>
						</>
					)}
				</div>

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

				{/* {userAddress !== undefined &&
					rewardInfo.reward !== undefined &&
					rewardInfo.reward !== '' && (
						<div>
							<div>
								<div>
									<div>
										<Paragraph>Total Testnet Points</Paragraph>
										<Paragraph>{rewardInfo.points}</Paragraph>
									</div>
									<div>
										<Paragraph>Your $DIVA token reward</Paragraph>
										<Paragraph>
											{Number(rewardInfo.reward).toFixed(1)}
										</Paragraph>
									</div>
									{claimedAmount.gt(0) && (
										<div>
											<Paragraph>You already claimed:</Paragraph>
											<Paragraph>
												{toStringFixed(claimedAmount, DIVA_TOKEN_DECIMALS, 4)}
											</Paragraph>
										</div>
									)}
									<div>
										<Paragraph>Claimable amount:</Paragraph>
										<Paragraph>
											{toStringFixed(claimableAmount, DIVA_TOKEN_DECIMALS, 4)}
										</Paragraph>
									</div>
								</div>
							</div>
						</div>
					)} */}

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
						<TokenClaimInfo
							userAddress={userAddress}
							rewardInfo={rewardInfo}
							claimable={claimable}
							claim={claim}
							isClaiming={isClaiming}
							claimableAmount={claimableAmount}
							claimedAmount={claimedAmount}
						/>
					)}

				{userAddress !== undefined &&
					rewardInfo.reward !== undefined &&
					rewardInfo.reward !== '' && (
						<Stack className="m-8 font-sans w-[450px]" gap={3}>
							<Stack direction={'row'} justify={'space-between'}>
								<div className="opacity-50">Subject to linear vesting</div>

								{rewardInfo?.reward ? (
									<div>{addThousandSeparators(0.6 * rewardInfo.reward)}</div>
								) : (
									<div>-</div>
								)}
							</Stack>

							<Stack direction={'row'} justify={'space-between'}>
								<div className="opacity-50">Vesting duration</div>
								{/* Subject to linear vesting" is 60% * amount */}
								{rewardInfo.time <= 0 ? (
									<div>-</div>
								) : (
									<div>{`${rewardInfo.time / 31536000} ${
										rewardInfo.time / 31536000 > 1 ? 'years' : 'year'
									}`}</div>
								)}
							</Stack>
						</Stack>
					)}
			</Stack>
			<RewardPageBlobs />
		</PageLayout>
	)
}

export default Rewards

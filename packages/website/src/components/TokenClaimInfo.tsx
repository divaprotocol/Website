import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Stack, Tooltip } from '@chakra-ui/react'
import { useChainModal } from '@rainbow-me/rainbowkit'
import { useState, useEffect } from 'react'
import Jazzicon from 'react-jazzicon'
import { useNetwork } from 'wagmi'

import { DIVA_TOKEN_DECIMALS } from '../constants'
import { toStringFixed, addThousandSeparators } from '../util/bn'
import { getShortenedAddress } from '../util/getShortenedAddress'
import { Card } from './ui/Card'
import { RewardObject } from '../types/index'
import { Button } from './ui/Button'

const TokenClaimInfo = ({
	userAddress,
	rewardInfo,
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

	const UnclaimedAmount =
		rewardInfo.reward -
			Number(toStringFixed(claimedAmount, DIVA_TOKEN_DECIMALS, 4)) >
		0
			? rewardInfo.reward -
			  Number(toStringFixed(claimedAmount, DIVA_TOKEN_DECIMALS, 4))
			: 0

	return (
		<Card className="md:w-[500px] min-h-[498px] px-0 py-0 font-sans z-10">
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
					<div>{addThousandSeparators(UnclaimedAmount)}</div>
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
						className="justify-center"
						onClick={openChainModal}
						style={{
							backgroundImage: 'linear-gradient(to left, #EF4444, #F87171)',
						}}>
						{`Switch to Goerli`}
					</Button>
				) : (
					<Button
						primary
						className="justify-center"
						onClick={() => claim()}
						disabled={claimableAmount.eq(0)}
						isLoading={isClaiming}>
						{'Claim'}
					</Button>
				)}
			</Stack>
		</Card>
	)
}

export default TokenClaimInfo

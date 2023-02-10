import { Box } from '@chakra-ui/react'
import PageLayout from '../components/pageLayout/PageLayout'
import Image from 'next/image'
import { Stack } from '../components/layout/Stack'
import { Heading } from '../components/typography/Heading'
import { Highlight } from '../components/typography/Highlight'
import { Paragraph } from '../components/typography/Paragraph'
import { Avatar } from '../components/Avatar'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Flex, Link } from '@chakra-ui/react'
import constants from '../constants/index'
// import { TokenSection } from "../components/Section/TokenSection";

export default function token() {
	return (
		<PageLayout>
			<Stack className="">
				<Stack
					vertical
					className="justify-center items-center gap-32 h-[728px]">
					<Image
						src="/illustrations/DivaToken.svg"
						width={459}
						height={453}
						alt="Mission"
					/>
					<Stack className="text-left max-w-lg">
						<Heading as="h2" size="lg">
							The DIVA
							<Highlight> Token</Highlight>
						</Heading>
						<Paragraph className="font-serif opacity-50 text-lg">
							We envision a world where financial institutions are built on top
							of open-source decentralized protocols and allow everyone with an
							internet connection to access basic financial services in a
							permissionless way.DIVA Protocol is our contribution to this new
							financial paradigm to enable derivative applications including
							insurance, predictions and structured products peer-to-peer.
						</Paragraph>
						<Stack vertical className="space-x-14 z-10">
							<Link
								href="https://www.divaprotocol.io/posts/diva-tokenomics"
								className="hover:no-underline">
								<Button className="bg-transparent">
									<Flex className="hover:no-underline">
										Learn More
										<Image
											src="/icons/ArrowRight.svg"
											width={12}
											height={10}
											alt={'arrow right'}
											className="ml-2"
										/>
									</Flex>
								</Button>
							</Link>
							<Link href="/rewards" className="hover:no-underline">
								<Button primary>
									<Flex className="hover:no-underline">claim $DIVA</Flex>
								</Button>
							</Link>
						</Stack>
					</Stack>
					{/* left most */}
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
					{/* middle top */}
					<div
						style={{
							position: 'absolute',
							width: '402px',
							height: '329px',
							left: '721px',
							top: 'calc(50% - 329px/2 - 179.5px)',
							background:
								'linear-gradient(116.38deg, rgba(0, 56, 255, 0.3) 6.37%, rgba(22, 227, 216, 0.3) 89.66%)',
							filter: 'blur(131.902px)',
							transform: 'matrix(-1, 0, 0, 1, 0, 0)',
						}}></div>
					{/* right */}
					<div
						style={{
							position: 'absolute',
							width: '498px',
							height: '408px',
							left: '1104px',
							top: 'calc(50% - 408px/2 + 154px)',
							background:
								'linear-gradient(116.38deg, rgba(0, 56, 255, 0.17) 6.37%, rgba(22, 227, 216, 0.17) 89.66%)',
							filter: 'blur(131.902px)',
							transform: 'matrix(-1, 0, 0, 1, 0, 0)',
						}}></div>
				</Stack>

				{/* <Stack>More details coming soon!</Stack> */}
			</Stack>
		</PageLayout>
	)
}

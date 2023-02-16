import Image from 'next/image'
import { Stack } from '../components/layout/Stack'
import PageLayout from '../components/pageLayout/PageLayout'
import { Heading } from '../components/typography/Heading'
import { Highlight } from '../components/typography/Highlight'
import { Paragraph } from '../components/typography/Paragraph'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Flex } from '@chakra-ui/react'
import FAQSection from '../components/View/FAQ'
import Link from 'next/link'

export type Post = {
	author: string
	content: string
	title: string
	description: string
	slug: string
	date: string
	coverImage: string
	coverImageDescription: string
	coverImageWidth: number
	coverImageHeight: number
	excerpt: string
	featured?: boolean
}

export default function Home() {
	return (
		<PageLayout>
			<div
				className={`relative h-[calc(100vh-5rem)] flex flex-row justify-center
      items-center bg-gradient-to-t from-[rgba(0,0,0,.7)] via-transparent radial-gradient-1`}>
				<Stack className="items-center relative">
					<Heading as="h1" size="xl">
						Powering the world of <Highlight>Derivatives</Highlight>
					</Heading>
					<Paragraph className="text-center text-lg opacity-60">
						DIVA Protocol is a decentralized and permissionless piece of
						infrastructure that allows its users to create and settle fully
						customizable derivative contracts peer-to-peer.
					</Paragraph>
					<Stack vertical className="pt-5">
						<a
							href="https://docs.divaprotocol.io/"
							target={'_blank'}
							rel="noreferrer">
							<Button primary>
								<Flex className="hover:no-underline">
									Documentation
									<Image
										src="/icons/ArrowRight.svg"
										width={12}
										height={10}
										alt={'arrow right'}
										className="ml-2"
									/>
								</Flex>
							</Button>
						</a>
						<Link href="/dapps" className="hover:no-underline z-10">
							<Button>Explore dApps</Button>
						</Link>
					</Stack>
				</Stack>
			</div>

			{/* DIVA protocol powered applications */}
			<div className="relative">
				<Stack className="items-center relative text-center pt-20">
					<Heading as="h2" size="lg">
						<Highlight>DIVA Protocol</Highlight> powered Applications
					</Heading>
					<Paragraph className="text-center text-lg">
						Applications that you can be built on top of DIVA Protocol. No smart
						contract programming skills required.
					</Paragraph>
				</Stack>
				<Stack
					vertical
					className="pt-20 container max-w-7xl m-auto space-x-12 text-left">
					<Card>
						<Stack>
							<Image
								alt="Insurance Products"
								width="100"
								height="100"
								src="/icons/InsuranceProducts.svg"
							/>
							<Heading as="h3">Insurance</Heading>
							<Paragraph>
								Derivatives with payouts linked to insurance loss events such as
								natural disasters, credit default, DeFi hacks, or medical claim
								costs.
							</Paragraph>
						</Stack>
					</Card>
					<Card>
						<Stack>
							<Image
								alt="Structured Products"
								width="100"
								height="100"
								src="/icons/StructuredProducts.svg"
							/>
							<Heading as="h3">Structured products</Heading>
							<Paragraph>
								Derivatives mirroring the payoff curve of barrier reverse
								convertibles and other popular structured products.
							</Paragraph>
						</Stack>
					</Card>
					<Card>
						<Stack>
							<Image
								alt="Prediction Markets"
								width="100"
								height="100"
								src="/icons/Prediction.svg"
							/>
							<Heading as="h3">Prediction markets</Heading>
							<Paragraph>
								Derivatives with binary or linear payoffs that are linked to the
								outcome of sport, political or economic events.
							</Paragraph>
						</Stack>
					</Card>
				</Stack>
				<div className="py-11 pb-24 flex justify-center">
					<a
						href="https://docs.divaprotocol.io/use-cases/overview"
						target={'_blank'}
						rel="noreferrer">
						<Button>Learn more</Button>
					</a>
				</div>
				{/* left ellipse */}
				<div
					style={{
						position: 'absolute',
						width: '524px',
						height: '524px',
						left: '-200px',
						top: '187px',
						background:
							'linear-gradient(116.38deg, rgba(0, 56, 255, 0.3) 6.37%, rgba(22, 227, 216, 0.3) 89.66%)',
						filter: 'blur(162px)',
					}}></div>
				{/* right ellipse */}
				<div
					style={{
						position: 'absolute',
						width: '455px',
						height: '455px',
						right: '250px',
						top: '400px',
						background:
							'linear-gradient(116.38deg, rgba(0, 56, 255, 0.2) 6.37%, rgba(22, 227, 216, 0.2) 89.66%)',
						filter: 'blur(162px)',
					}}></div>
			</div>

			{/* Protocol Features */}
			<Stack className="container max-w-7xl m-auto pt-32">
				<Heading as="h3" size="lg">
					Protocol <Highlight>Features</Highlight>
				</Heading>
				<div className="relative pt-32">
					<Stack vertical className="relative justify-between">
						<Stack className="w-1/3">
							<div className="bg-gradient-to-l rounded-lg from-[#00c2ff91] bg-opacity-30 to-transparent overflow-hidden [padding:1px] shadow-2xl">
								<div className="bg-black p-8 rounded-lg">
									<Heading as="h3">Permissionless</Heading>
									<Paragraph className="opacity-60">
										Anyone can create and settle derivatives on anything without
										permission.
									</Paragraph>
								</div>
							</div>
							<div className="bg-gradient-to-l rounded-lg from-[#00c2ff91] bg-opacity-30 to-transparent overflow-hidden [padding:1px] shadow-2xl">
								<div className="bg-black p-8 rounded-lg">
									<Heading as="h3">Tradeable</Heading>
									<Paragraph className="opacity-60">
										Position tokens are ERC20 and can be easily integrated into
										any CEX or DEX.
									</Paragraph>
								</div>
							</div>
						</Stack>
						<Image
							src={'/illustrations/Features.svg'}
							width={1051}
							height={543}
							alt="Features"
							className="absolute -top-[350px] right-[110px] opacity-100 z-10"
						/>
						<Image
							src={'/illustrations/lines.svg'}
							width={1051}
							height={543}
							alt="Features"
							className="absolute top-[80px] right-[110px] opacity-30"
						/>
						{/* left ellipse */}
						<div
							style={{
								position: 'absolute',
								width: '528px',
								height: '528px',
								left: '-400px',
								bottom: '-250px',
								background:
									'linear-gradient(116.38deg, rgba(0, 56, 255, 0.18) 6.37%, rgba(22, 227, 216, 0.18) 89.66%)',
								filter: 'blur(162px)',
							}}></div>
						{/* right ellipse */}
						<div
							style={{
								position: 'absolute',
								width: '474px',
								height: '474px',
								right: '-230px',
								bottom: '100px',
								background:
									'linear-gradient(116.38deg, rgba(0, 56, 255, 0.16) 6.37%, rgba(22, 227, 216, 0.16) 89.66%)',
								filter: 'blur(162px)',
							}}></div>
						<Stack className="w-1/3">
							<div className="bg-gradient-to-r rounded-lg from-[#00c2ff91] bg-opacity-30 to-transparent overflow-hidden [padding:1px] shadow-2xl">
								<div className="bg-black p-8 rounded-lg">
									<Heading as="h3">Fully collateralized</Heading>
									<Paragraph className="opacity-60">
										Eliminates counterparty risk and margin calls and gives
										users a safe and frictionless experience.
									</Paragraph>
								</div>
							</div>

							<div className="bg-gradient-to-r rounded-lg from-[#00c2ff91] bg-opacity-30 to-transparent overflow-hidden [padding:1px] shadow-2xl">
								<div className="bg-black p-8 rounded-lg">
									<Heading as="h3">Highly customizable</Heading>
									<Paragraph className="opacity-60">
										Flexible payoff profiles, any reference asset, oracle
										agnostic, any ERC20 as collateral.
									</Paragraph>
								</div>
							</div>
						</Stack>
					</Stack>
				</div>

				{/* how it's works */}
				<Stack className="items-center pt-32">
					<Heading as="h3" size="lg">
						How it <Highlight>Works</Highlight>
					</Heading>
					<Image
						src={'/illustrations/steps.svg'}
						width={1266}
						height={1008}
						alt="steps"
						priority={true}
						style={{
							marginTop: '-100px',
						}}
					/>
					{/* uncomment when the video is available */}
					{/* <Button>
						<span className="flex space-x-3 items-center">
							<Image
								className="-m-5 mr-0"
								src="/icons/Play.svg"
								height="37"
								width="37"
								alt="Play video"
							/>
							<span>Watch Video</span>
						</span>
					</Button> */}
				</Stack>

				{/* partners */}
				<Stack className="container max-w-7xl m-auto pt-32 space-y-20 relative">
					<Heading as="h3" size="lg">
						Our <Highlight>Partners</Highlight>
					</Heading>
					<div
						style={{
							position: 'absolute',
							width: '1200px',
							height: '64px',
							left: 'calc(50% - 1200px/2)',
							top: '44%',
							background:
								'linear-gradient(116.38deg, #0038FF 6.37%, #16E3D8 89.66%)',
							filter: 'blur(142px)',
						}}></div>

					<Stack
						vertical
						className="space-x-10 justify-center items-center pt-12 z-10">
						<a
							href="https://www.darleytechnologies.com/"
							target={'_blank'}
							rel={'noreferrer'}>
							<Image
								src="/logos/darley-logo.png"
								height="90"
								width="300"
								alt="Darley"
							/>
						</a>
						<span className="block [width:1px] h-24 bg-white bg-opacity-10"></span>
						<a
							href="https://www.dwf-labs.com/"
							target={'_blank'}
							rel={'noreferrer'}>
							<Image
								src="/logos/dwf.png"
								height="90"
								width="300"
								alt="Dwf Labs"
							/>
						</a>
					</Stack>
					<Stack
						vertical
						className="space-x-7 justify-center items-center py-20 border-t border-white border-opacity-10">
						<Paragraph className="pr-7">Supported Networks:</Paragraph>
						<span className="rounded-md bg-white bg-opacity-10 p-2 px-4">
							<Image
								src="/logos/polygon.png"
								height="24"
								width="100"
								alt="Polygon Labs"
							/>
						</span>
						<span className="rounded-md bg-white bg-opacity-10 p-2 px-4">
							<Image
								src="/logos/eth.png"
								height="24"
								width="132"
								alt="Ethereum"
							/>
						</span>
						<span className="rounded-md bg-white bg-opacity-10 p-2 px-4">
							<Image
								src="/logos/arbitr.png"
								height="24"
								width="126"
								alt="Arbitrum"
							/>
						</span>
					</Stack>
				</Stack>

				{/* FAQ */}
				<FAQSection />

				{/* join the conversation */}
				<Stack className="container max-w-7xl m-auto space-y-20 pt-32 relative pb-16">
					<div className="m-auto space-y-10 mb-10">
						<Heading as="h3" size="lg">
							Join the <Highlight>Conversation</Highlight>
						</Heading>
						<Paragraph className="opacity-60">
							Our global and vibrant community drives the success of the
							Protocol. Join the conversation on Discord and Twitter to stay up
							to date on the latest community news.
						</Paragraph>
					</div>
					<div
						style={{
							position: 'absolute',
							width: '356px',
							height: '356px',
							left: '396px',
							top: '125px',
							background:
								'linear-gradient(116.38deg, rgba(0, 56, 255, 0.33) 6.37%, rgba(22, 227, 216, 0.33) 89.66%)',
							filter: 'blur(162px)',
						}}></div>
					<Stack vertical className="justify-center space-x-16 z-10">
						<a
							href="https://twitter.com/divaprotocol_io"
							target={'_blank'}
							rel="noreferrer">
							<Card className="max-w-lg p-10  hover:shadow-md hover:shadow-[#03242F]">
								<Stack
									vertical
									className="space-x-10"
									style={{
										borderImageSource:
											'linear-gradient(180deg, #00C2FF 0%, #0038FF 100%)',
									}}>
									<Image
										className="flex-shrink-0"
										src="/icons/Twitter.svg"
										height="136"
										width="136"
										alt="Discord"
									/>
									<div className="text-left space-y-4 flex-shrink">
										<Heading as="h3" size="sm">
											Twitter
										</Heading>
										<Paragraph>
											Follow the latest news from DIVA Protocol
										</Paragraph>
									</div>
								</Stack>
							</Card>
						</a>

						<a
							href="https://discord.com/invite/DE5b8ZeJjK"
							target="_blank"
							rel="noreferrer">
							<Card className="max-w-lg p-10 hover:shadow-md hover:shadow-[#03242F]">
								<Stack vertical className="space-x-10">
									<Image
										className="flex-shrink-0"
										src="/icons/Discord.svg"
										height="136"
										width="136"
										alt="Discord"
									/>
									<div className="text-left space-y-4 flex-shrink">
										<Heading as="h3" size="sm">
											Discord
										</Heading>
										<Paragraph>
											Ask questions and engage with the DIVA Community
										</Paragraph>
									</div>
								</Stack>
							</Card>
						</a>
					</Stack>
				</Stack>
			</Stack>
		</PageLayout>
	)
}

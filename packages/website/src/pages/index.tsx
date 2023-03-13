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
import { animated, useSpring } from '@react-spring/web'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer, textVariant } from '../util/motion'

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
			<motion.div
				variants={staggerContainer(0.1, 1)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}>
				<div
					className={`relative h-[calc(100vh-5rem)] flex flex-row justify-center
      items-center bg-gradient-to-t from-[rgba(0,0,0,.7)] via-transparent radial-gradient-1`}>
					<Stack className="items-center relative">
						<motion.h1
							variants={textVariant(1.1)}
							className="text-white font-serif tracking-tight font-medium text-3xl">
							Powering the World of <Highlight>Derivatives</Highlight>
						</motion.h1>
						<motion.div variants={textVariant(1.2)}>
							<Paragraph className="text-center text-lg opacity-60">
								DIVA Protocol is a universal and highly flexible smart
								contract-based operating system for creating and settling
								derivative products peer-to-peer.
							</Paragraph>
						</motion.div>
						<motion.div variants={textVariant(1.2)}>
							<Stack className="pt-5" vertical>
								<a
									href="https://docs.divaprotocol.io/"
									target={'_blank'}
									rel="noreferrer">
									<Button
										primary
										className="w-full md:w-auto"
										innerClassName="px-3 py-3 md:px-8 md:py-4">
										<Flex className="hover:no-underline text-base md-text-auto">
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
									<Button
										className="w-full md:w-auto"
										innerClassName="px-3 py-3 md:px-8 md:py-4 w-full">
										Explore dApps
									</Button>
								</Link>
							</Stack>
						</motion.div>
					</Stack>
				</div>
			</motion.div>

			{/* DIVA protocol powered applications */}
			<motion.div
				variants={staggerContainer(0.1, 1)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}>
				<div className="relative">
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
					<Stack className="items-center relative text-center pt-20">
						<motion.h1
							variants={textVariant(0.5)}
							className="text-white font-serif tracking-tight font-medium text-2xl">
							<Highlight>DIVA Protocol</Highlight> powered Applications
						</motion.h1>
						<motion.div variants={textVariant(0.5)}>
							<Paragraph className="text-center text-lg">
								{/* Applications that you can be built on top of DIVA Protocol. No smart
						contract programming skills required. */}
								{/* Applications that can be powered by DIVA Protocol without requiring
						any smart contract programming skills. */}
								Build financial derivative applications without connecting to
								traditional banking infrastructure.
							</Paragraph>
						</motion.div>
					</Stack>
					<Stack
						vertical
						className="pt-20 container max-w-7xl m-auto space-x-0 md:space-x-12 text-left flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-center items-center">
						<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
							<Card className="z-10 min-h-[338px] w-[100%]">
								<Stack>
									<Image
										alt="Insurance Products"
										width="100"
										height="100"
										src="/icons/InsuranceProducts.svg"
									/>
									<Heading as="h3">Insurance</Heading>
									<Paragraph>
										Derivatives with payouts linked to insurance loss events
										such as natural disasters, credit default, DeFi hacks, or
										medical claim costs.
									</Paragraph>
								</Stack>
							</Card>
						</motion.div>

						<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
							<Card className="z-10 min-h-[338px] w-[100%]">
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
						</motion.div>

						<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
							<Card className="z-10 min-h-[338px] w-[100%]">
								<Stack>
									<Image
										alt="Prediction Markets"
										width="100"
										height="100"
										src="/icons/Prediction.svg"
									/>
									<Heading as="h3">Prediction markets</Heading>
									<Paragraph>
										Derivatives with binary or linear payoffs that are linked to
										the outcome of sport, political or economic events.
									</Paragraph>
								</Stack>
							</Card>
						</motion.div>
					</Stack>
					<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
						<div className="py-11 pb-24 flex justify-center">
							<a
								href="https://docs.divaprotocol.io/use-cases/overview"
								target={'_blank'}
								rel="noreferrer">
								<Button>Learn more</Button>
							</a>
						</div>
					</motion.div>
				</div>
			</motion.div>

			{/* Protocol Features */}
			<motion.div
				variants={staggerContainer(0.1, 1)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}>
				<Stack className="container max-w-7xl m-auto pt-32">
					<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
						<motion.h1
							variants={textVariant(1.1)}
							className="text-white font-serif tracking-tight font-medium text-2xl">
							Protocol <Highlight>Features</Highlight>
						</motion.h1>
						<div className="relative pt-32">
							<Stack
								vertical
								className="relative justify-between flex-wrap gap-8 md:gap-0">
								<Stack className="md:w-1/3 flex-wrap">
									<div className="bg-gradient-to-l rounded-lg from-[#00c2ff91] bg-opacity-30 to-transparent overflow-hidden [padding:1px] shadow-2xl">
										<div className="bg-black p-8 rounded-lg">
											<Heading as="h3">Highly customizable</Heading>
											<Paragraph className="opacity-60">
												Users can choose any event, a wide range of payoff
												profiles, any oracle and any ERC20 compliant asset as
												collateral.
											</Paragraph>
										</div>
									</div>
									<div className="bg-gradient-to-l rounded-lg from-[#00c2ff91] bg-opacity-30 to-transparent overflow-hidden [padding:1px] shadow-2xl">
										<div className="bg-black p-8 rounded-lg">
											<Heading as="h3">Fully collateralized</Heading>
											<Paragraph className="opacity-60">
												Eliminates counter-party risk and margin calls by
												requiring full collateralization, giving users a safe
												and frictionless experience.
											</Paragraph>
										</div>
									</div>
								</Stack>
								<Image
									src={'/illustrations/Features.svg'}
									width={1051}
									height={543}
									alt="Features"
									className="absolute -top-[350px] right-[110px] opacity-100 z-10 hidden md:block "
								/>
								<Image
									src={'/illustrations/lines.svg'}
									width={1051}
									height={543}
									alt="Features"
									className="absolute top-[80px] right-[110px] opacity-30 hidden md:block"
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
								<Stack className="md:w-1/3 flex-wrap">
									<div className="bg-gradient-to-r rounded-lg from-[#00c2ff91] bg-opacity-30 to-transparent overflow-hidden [padding:1px] shadow-2xl">
										<div className="bg-black p-8 rounded-lg">
											<Heading as="h3">Built-in compliance layer</Heading>
											<Paragraph className="opacity-60">
												Possibility to restrict the transfer of the derivative
												assets to holders of a specific NFT, such as a KYC NFT
												token.
											</Paragraph>
										</div>
									</div>

									<div className="bg-gradient-to-r rounded-lg from-[#00c2ff91] bg-opacity-30 to-transparent overflow-hidden [padding:1px] shadow-2xl">
										<div className="bg-black p-8 rounded-lg">
											<Heading as="h3">Interoperable</Heading>
											<Paragraph className="opacity-60">
												Derivatives are represented as ERC20 tokens and can be
												seamlessly integrated into any existing CEX and DEX
												infrastructure.
											</Paragraph>
										</div>
									</div>
								</Stack>
							</Stack>
						</div>
					</motion.div>
					{/* how it's works */}
					<Stack className="items-center pt-32 relative">
						<motion.h1
							variants={textVariant(1.1)}
							className="text-white font-serif tracking-tight font-medium text-2xl">
							How it <Highlight>Works</Highlight>
						</motion.h1>

						<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
							<Image
								src={'/illustrations/steps.svg'}
								width={1266}
								height={1008}
								alt="steps"
								priority={true}
								style={{
									marginTop: '-00px',
								}}
								className="hidden md:block"
							/>
							<Stack className="md:hidden pt-10">
								<Image
									src={'/illustrations/step1.svg'}
									width={600}
									height={244}
									alt="steps"
								/>
								<Image
									src={'/illustrations/step2.svg'}
									width={600}
									height={244}
									alt="steps"
								/>
								<Image
									src={'/illustrations/step3.svg'}
									width={600}
									height={244}
									alt="steps"
								/>
								<Image
									src={'/illustrations/step4.svg'}
									width={600}
									height={244}
									alt="steps"
								/>
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
							</Stack>
						</motion.div>
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
					<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
						<Stack className="container max-w-7xl m-auto pt-32 space-y-20 relative">
							<motion.h1
								variants={textVariant(1.1)}
								className="text-white font-serif tracking-tight font-medium text-2xl">
								Our <Highlight>Partners</Highlight>
							</motion.h1>

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

							<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
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
									className="md:space-x-7 justify-center items-center py-20 border-t border-white border-opacity-10 flex-col md:flex-row">
									<Paragraph className="md:pr-7 md:mt-6">
										Supported Networks:
									</Paragraph>
									<Stack className="flex-col md:flex-row mt-8 md:mt-0 gap-2 justify-center items-center">
										<span className="rounded-md bg-white bg-opacity-10 p-2 px-4 md:mt-7">
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
							</motion.div>
						</Stack>
					</motion.div>
					{/* FAQ */}
					<FAQSection />
					{/* join the conversation */}
					<Stack className="container max-w-7xl m-auto space-y-20 pt-32 relative pb-16">
						<div className="m-auto space-y-10 mb-10">
							<motion.h1
								variants={textVariant(1.1)}
								className="text-white font-serif tracking-tight font-medium text-2xl">
								Join the <Highlight>Conversation</Highlight>
							</motion.h1>
							<motion.div variants={textVariant(1.2)}>
								<Paragraph className="opacity-60">
									Our global and vibrant community drives the success of the
									Protocol. Join the conversation on Discord and Twitter to stay
									up to date on the latest community news.
								</Paragraph>
							</motion.div>
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
						<Stack
							vertical
							className="justify-center space-x-0 md:space-x-16 z-10 flex-col md:flex-row gap-8">
							<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
								<a
									href="https://twitter.com/divaprotocol_io"
									target={'_blank'}
									rel="noreferrer">
									<Card className="max-w-lg md:p-10 hover:shadow-md hover:shadow-[#03242F]">
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
							</motion.div>

							<motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
								<a
									href="https://discord.com/invite/DE5b8ZeJjK"
									target="_blank"
									rel="noreferrer">
									<Card className="max-w-lg md:p-10 hover:shadow-md hover:shadow-[#03242F]">
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
							</motion.div>
						</Stack>
					</Stack>
				</Stack>
			</motion.div>
		</PageLayout>
	)
}

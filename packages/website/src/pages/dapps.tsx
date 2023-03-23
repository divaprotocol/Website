import PageLayout from '../components/pageLayout/PageLayout'
import { Stack } from '../components/layout/Stack'
import Image from 'next/image'
import { Heading } from '../components/typography/Heading'
import { Highlight } from '../components/typography/Highlight'
import { Paragraph } from '../components/typography/Paragraph'
import { Card } from '../components/ui/Card'
import { Flex, Grid, Link, useBreakpointValue } from '@chakra-ui/react'
import constants from '../constants/index'
import { Button } from '../components/ui/Button'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface DApp {
	name: string
	description: string
	image: string
	url: string
	logoHeight?: number
	logoWidth?: number
}

const DAppsList: DApp[] = [
	{
		name: 'DIVA App',
		description: `DIVA App is a one-stop solution to create, trade and settle derivative products. It's combining three protocols, DIVA, 0x and Tellor Protocol to offer users a fully decentralized experience.`,
		image: '/illustrations/divaApp.svg',
		url: constants.appUrl,
	},
	{
		name: 'DIVA Donate',
		description: `A platform that facilitates conditional donations to financially support communities that are impacted by climate change, powered by DIVA Protocol.`,
		image: '/logos/diva-donate.svg',
		url: constants.divaDonate,
		logoHeight: 52,
		logoWidth: 52,
	},
	{
		name: 'DIVA Viz',
		description: `Generate your offer post to share with the world. Powered by DIVA Protocol.`,
		image: '/illustrations/divaApp.svg',
		url: constants.divaViz,
	},
]

export default function DApps() {
	const variant = useBreakpointValue({ base: 'base', md: 'desktop' })

	return (
		<PageLayout>
			<Stack className="justify-center">
				<Stack
					vertical
					className="justify-center items-center gap-32 h-[728px] flex-col md:flex-row">
					<Image
						className="mt-10"
						src="/illustrations/Apps.svg"
						width={360}
						height={300}
						alt="Mission"
					/>
					<Stack className="text-left max-w-lg">
						<Heading as="h2" size="lg">
							<Highlight>dApp</Highlight> Store
						</Heading>
						<Paragraph className="font-serif opacity-50 text-base">
							Explore apps built with DIVA Protocol.
							<Link
								href={constants.documentationUrl}
								isExternal
								className="underline">
								Learn{' '}
							</Link>
							how you can start building apps on top of DIVA Protocol yourself
							and get them featured in our app store.
						</Paragraph>
					</Stack>
					{/* left */}
					<div
						style={{
							position: 'absolute',
							width: '402px',
							height: '454px',
							left: '0px',
							top: 'calc(45% - 454px/2 + 104px)',
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
							left: '1304px',
							top: 'calc(50% - 408px/2 + 154px)',
							background:
								'linear-gradient(116.38deg, rgba(0, 56, 255, 0.17) 6.37%, rgba(22, 227, 216, 0.17) 89.66%)',
							filter: 'blur(131.902px)',
							transform: 'matrix(-1, 0, 0, 1, 0, 0)',
						}}
						className="hidden lg:block"></div>
				</Stack>

				<Stack
					vertical
					className="justify-center items-center gap-32 md:h-[728px] relative">
					<Grid
						templateColumns={{
							base: 'repeat(1, 1fr)',
							md: 'repeat(2, 1fr)',
						}}
						gap={10}
						columnGap={20}
						className="md:h-[752px]">
						{DAppsList.map((dapp, index) => (
							<Card
								key={index}
								className="md:w-[500px] md:h-[299px] p-0 pt-0 pl-0 pr-0">
								<Card className="w-full h-[90px] md:h-[120px] flex flex-col justify-center p-1 pr-3 md:p-5 md:pr-10 md:pl-8">
									<Flex justifyContent={'space-between'} alignItems={'center'}>
										<Flex alignItems={'center'}>
											<Image
												src={dapp.image}
												width={dapp.logoWidth ?? 72}
												height={dapp.logoWidth ?? 72}
												alt={'diva app'}
												className={`${dapp.logoWidth && 'mr-4'}`}
											/>
											<Flex
												flexDirection={'column'}
												justifyContent={'flex-start'}
												className="text-left">
												<div className="font-sans text-lg md:text-xl text-white">
													{dapp.name}
												</div>
												{/* <div className="text-base font-sans opacity-50 font-medium">
												Short app description
											</div> */}
											</Flex>
										</Flex>
										<Link
											href={constants.appUrl}
											isExternal
											className="md:flex justify-center items-center gap-3">
											<div className="font-medium font-sans text-sm md:text-base text-[#3393E0] hidden md:block">
												Launch App
											</div>
											<ExternalLinkIcon className="md:hidden" />
										</Link>
									</Flex>
								</Card>
								<Paragraph className="opacity-50 px-8 py-4 text-left text-sm font-serif">
									{dapp.description}
								</Paragraph>
							</Card>
						))}

						<Image
							src={'/illustrations/comingSoonApp.svg'}
							width={500}
							height={288}
							alt="coming soon"
						/>
					</Grid>
					<div
						style={{
							position: 'absolute',
							width: '526px',
							height: '289px',
							left: '1034px',
							top: 'calc(50% - 289px/2 + 146.5px)',
							background:
								'linear-gradient(116.38deg, rgba(0, 56, 255, 0.2) 6.37%, rgba(22, 227, 216, 0.2) 89.66%)',
							filter: 'blur(131.902px)',
							transform: 'matrix(-1, 0, 0, 1, 0, 0)',
						}}></div>
				</Stack>

				<Stack className="pt-60 relative">
					<Card className="max-w-3xl self-center md:py-12 md:px-16">
						<Stack className="justify-center items-center space-y-12">
							<Heading as="h2" size="lg">
								<Highlight>Build</Highlight>
							</Heading>
							<Paragraph className="opacity-50">
								{`Whether you're a seasoned Web2 developer or just getting
									started, DIVA Protocol makes it simple to create derivative
									financial applications such as insurance, prediction markets,
									structured products or conditional donations, all without
									relying on traditional banking infrastructure. Embrace the
									future of finance and start building with DIVA today.`}
							</Paragraph>
							<Stack vertical={variant === 'base' ? false : true}>
								<a
									href={constants.documentationUrl}
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
								<Link href="/dapps" className="hover:no-underline w-full">
									<Button className="w-full" innerClassName="w-full">
										Explore Apps
									</Button>
								</Link>
							</Stack>
						</Stack>
					</Card>
					<div
						style={{
							position: 'absolute',
							width: '437px',
							height: '437px',
							left: '79px',
							top: '139px',
							background:
								'linear-gradient(116.38deg, rgba(0, 56, 255, 0.23) 6.37%, rgba(22, 227, 216, 0.23) 89.66%)',
							filter: 'blur(162px)',
						}}></div>
					<div
						style={{
							position: 'absolute',
							width: '566px',
							height: '264px',
							left: '1151px',
							top: '295px',
							background:
								'linear-gradient(116.38deg, rgba(0, 56, 255, 0.33) 6.37%, rgba(22, 227, 216, 0.33) 89.66%)',
							filter: 'blur(162px)',
							transform: 'matrix(-1, 0, 0, 1, 0, 0)',
						}}></div>
				</Stack>
			</Stack>
		</PageLayout>
	)
}

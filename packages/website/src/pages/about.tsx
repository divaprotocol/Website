import Image from 'next/image'
import { Stack } from '../components/layout/Stack'
import PageLayout from '../components/pageLayout/PageLayout'
import { Heading } from '../components/typography/Heading'
import { Highlight } from '../components/typography/Highlight'
import { Paragraph } from '../components/typography/Paragraph'
import { Avatar } from '../components/Avatar'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Flex, useBreakpointValue } from '@chakra-ui/react'
import constants from '../constants/index'
import Link from 'next/link'

export default function About() {
	const variant = useBreakpointValue({ base: 'base', md: 'desktop' })

	return (
		<PageLayout>
			<Stack className="space-y-10 mt-16 md:pt-40 pb-6">
				<Stack
					vertical
					className="justify-center space-x-20 md:gap-32 relative flex-col md:flex-row">
					<Image
						className="mt-10 order-last"
						src="/illustrations/Mission.svg"
						width={459}
						height={453}
						alt="Mission"
					/>
					<Stack className="text-left max-w-lg m-0" style={{ margin: 0 }}>
						<h1 className="rounded font-sans px-4 py-2 bg-white bg-opacity-10 w-min whitespace-nowrap text-white text-sm">
							Our Vision
						</h1>
						<Heading as="h2" size="sm">
							<Highlight>Establish DIVA Protocol</Highlight> as the operation
							system for derivative applications
						</Heading>
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
								width: '726px',
								height: '594px',
								left: '1104px',
								top: 'calc(50% - 594px/2 + 46px)',
								background:
									'linear-gradient(116.38deg, rgba(0, 56, 255, 0.2) 6.37%, rgba(22, 227, 216, 0.2) 89.66%)',
								filter: 'blur(131.902px)',
								transform: 'matrix(-1, 0, 0, 1, 0, 0)',
							}}></div>
						<Paragraph className="font-serif opacity-50">
							We envision a world where financial institutions are built on top
							of open-source decentralized protocols and allow everyone with an
							internet connection to access basic financial services in a
							permissionless way. DIVA Protocol is our contribution to this new
							financial paradigm to enable derivative applications including
							insurance, structured products, prediction markets, swaps and
							more, peer-to-peer.
						</Paragraph>
					</Stack>
				</Stack>

				<Stack
					vertical
					className="justify-center space-x-20 md:gap-32 pt-40 relative flex-col md:flex-row">
					<Stack className="text-left max-w-lg">
						<h2 className="rounded font-sans px-4 py-2 bg-white bg-opacity-10 w-min whitespace-nowrap text-white text-sm">
							DAO Mission
						</h2>
						<Heading as="h3" size="sm">
							<Highlight>Foster protocol adoption </Highlight> via delegation
						</Heading>
						{/* left  */}
						<div
							style={{
								position: 'absolute',
								width: '582px',
								height: '476px',
								left: '512px',
								top: 'calc(50% - 476px/2 - 109px)',
								background:
									'linear-gradient(116.38deg, rgba(0, 56, 255, 0.2) 6.37%, rgba(22, 227, 216, 0.2) 89.66%)',
								filter: 'blur(131.902px)',
								transform: 'matrix(-1, 0, 0, 1, 0, 0)',
							}}></div>
						{/* right */}
						<div
							style={{
								position: 'absolute',
								width: '582px',
								height: '476px',
								left: '1078px',
								top: 'calc(70% - 488px/2 + 46px)',
								background:
									'linear-gradient(116.38deg, rgba(0, 56, 255, 0.2) 6.37%, rgba(22, 227, 216, 0.2) 89.66%)',
								filter: 'blur(131.902px)',
								transform: 'matrix(-1, 0, 0, 1, 0, 0)',
							}}></div>
						<Paragraph className="font-serif opacity-50">
							The mission of the DIVA DAO is to expand and enhance the ecosystem
							surrounding the DIVA Protocol. This is achieved by providing
							funding for projects and initiatives that have the greatest
							potential to shape the future of the DIVA Protocol. To facilitate
							efficient and effective governance, DIVA Token holders delegate
							decision-making authority and access to the treasury funds to a
							central party through a unique continuous voting mechanism.
						</Paragraph>
					</Stack>
					<Image
						className="mt-10"
						src="/illustrations/Community.svg"
						width={459}
						height={453}
						alt="Mission"
					/>
				</Stack>

				<Stack className="items-center pt-32 relative">
					<Heading as="h2" size="lg">
						Genesis
						<Highlight> Team</Highlight>
					</Heading>
					<Paragraph className="text-center opacity-50 pb-10">
						The team that planted the seeds.
					</Paragraph>
					{/* <div className="grid grid-cols-4 gap-10 place-content-center"> */}
					<div className="flex flex-wrap gap-10 md:gap-20 max-w-[808px] justify-center">
						<Avatar src="/team/alex.png" name="Alex" />
						<Avatar src="/team/sambit.png" name="Sambit" />
						<Avatar src="/team/richard.png" name="Richard" />
						<Avatar src="/team/harsh.png" name="Harsh" />
						<Avatar src="/team/evan.png" name="Evan" />
						<Avatar src="/team/ayaz.png" name="Ayaz" />
						<Avatar src="/team/precious.png" name="Precious" />
						<Avatar src="/team/ashis.png" name="Ashis" />
						<Avatar src="/team/manvir.png" name="Manvir" />
						<Avatar src="/team/tarun.png" name="Tarun" />
						<Avatar src="/team/sahil.png" name="Sahil" />
						<Avatar src="/team/wlad.png" name="Wladimir" />
						<Avatar src="/team/sascha.png" name="Sascha" />
						<Avatar src="/team/julian.png" name="Julian" />
						<Avatar src="/team/kerry.png" name="Kerry" />
					</div>
					{/* top */}
					<div
						style={{
							position: 'absolute',
							width: '807px',
							height: '576px',
							left: '-28px',
							top: '262px',
							background:
								'linear-gradient(116.38deg, rgba(0, 56, 255, 0.23) 6.37%, rgba(22, 227, 216, 0.23) 89.66%)',
							filter: 'blur(162px)',
						}}></div>
					{/* bottom */}
					<div
						style={{
							position: 'absolute',
							width: '928px',
							height: '836px',
							left: '1001px',
							top: '502px',
							background:
								'linear-gradient(116.38deg, rgba(0, 56, 255, 0.15) 6.37%, rgba(22, 227, 216, 0.15) 89.66%)',
							filter: 'blur(162px)',
							transform: 'matrix(-1, 0, 0, 1, 0, 0)',
						}}></div>
				</Stack>

				<Stack className="pt-60 relative">
					<Card className="max-w-3xl self-center md:py-12 md:px-16">
						<Stack className="justify-center items-center md:space-y-12">
							<Heading as="h2" size="lg">
								<Highlight>Build</Highlight>
							</Heading>
							<Paragraph className="opacity-50">
								{`Whether you're a seasoned Web2 developer or just getting started, 
								DIVA Protocol makes it simple to create derivative financial applications such as insurance, prediction markets, 
								structured products or conditional donations, all without relying on traditional banking infrastructure. 
								Embrace the future of finance and start building with DIVA today.`}
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
								<Link href="/dapps" className="hover:no-underline m-0">
									<Button className="w-full md:w-auto" innerClassName="w-full">
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

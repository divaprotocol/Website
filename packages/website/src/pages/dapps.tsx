import PageLayout from '../components/pageLayout/PageLayout'
import { Stack } from '../components/layout/Stack'
import Image from 'next/image'
import { Heading } from '../components/typography/Heading'
import { Highlight } from '../components/typography/Highlight'
import { Paragraph } from '../components/typography/Paragraph'
import { Card } from '../components/ui/Card'
import { Flex, Grid, Link } from '@chakra-ui/react'
import constants from '../constants/index'
import { Button } from '../components/ui/Button'

export default function dApps() {
	return (
		<PageLayout>
			<Stack className="justify-center">
				<Stack
					vertical
					className="justify-center items-center gap-32 h-[728px]">
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
							Explore apps built with DIVA Protocol. Learn how you can start
							building apps on top of DIVA Protocol yourself and get them
							featured in our app store.
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
						}}></div>
				</Stack>

				<Stack
					vertical
					className="justify-center items-center gap-32 h-[728px] relative">
					<Grid
						templateColumns="repeat(2, 1fr)"
						gap={10}
						columnGap={20}
						className="h-[752px]">
						<Card className="w-[500px] h-[299px] p-0 pt-0 pl-0 pr-0">
							<Card className="w-full h-[120px] flex flex-col justify-center pr-10 pl-8">
								<Flex justifyContent={'space-between'} alignItems={'center'}>
									<Flex alignItems={'center'}>
										<Image
											src="/illustrations/divaApp.svg"
											width={72}
											height={72}
											alt={'diva app'}
										/>
										<Flex
											flexDirection={'column'}
											justifyContent={'flex-start'}
											className="text-left">
											<div className="font-sans text-xl text-white">
												DIVA App
											</div>
											<div className="text-base font-sans opacity-50 font-bold">
												Short app description
											</div>
										</Flex>
									</Flex>
									<Link href={constants.appUrl} isExternal>
										<div className="font-semibold font-sans text-base text-[#3393E0]">
											Launch App
										</div>
									</Link>
								</Flex>
							</Card>
							<Paragraph className="opacity-50 px-8 py-4 text-left text-sm font-serif">
								DIVA App is the first implementation of an app that uses DIVA
								Protocol as the underlying technology. It’s a universal app that
								allows its users to create, trade and settle derivative assets
								on anything.
							</Paragraph>
						</Card>
						<Image
							src={'/illustrations/comingSoonApp.svg'}
							width={500}
							height={288}
							alt="coming soon"
						/>
						<Image
							src={'/illustrations/comingSoonApp.svg'}
							width={500}
							height={288}
							alt="coming soon"
						/>
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
					<Card className="max-w-3xl self-center py-12 px-16">
						<Stack className="justify-center items-center space-y-12">
							<Heading as="h2" size="lg">
								<Highlight>Build</Highlight>
							</Heading>
							<Paragraph className="opacity-50">
								DIVA Protocol is a smart contract that takes care of all the
								logic used to create and settle derivative assets. As a Web2
								developer, you do not need to have any knowledge of writing
								smart contracts in Solidity. You can fully focus on building the
								best user experiences for creating and settling insurance,
								prediction or structured products.
							</Paragraph>
							<Stack vertical className="space-x-14">
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
								<Link href="/dapps" className="hover:no-underline">
									<Button>Explore Apps</Button>
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

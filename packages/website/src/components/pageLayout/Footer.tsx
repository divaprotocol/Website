import { Stack } from '../layout/Stack'
import Image from 'next/image'
import Link from 'next/link'
import { Grid } from '@chakra-ui/react'
import constants from '../../constants/index'

export function Footer() {
	return (
		<footer className="mt-32 text-white font-sans text-opacity-80 relative md:h-[233px] overflow-y-hidden bg-[rgba(255, 255, 255, 0.06)] w-screen overflow-hidden">
			<Stack
				vertical
				className="md:space-x-16 justify-between px-8 md:px-20 py-8 md:py-10 border-b border-white border-opacity-10 flex-col md:flex-row gap-8 ">
				<Image src="/DivaLogo.svg" height="136" width="136" alt="Diva Logo" />
				<Grid
					templateColumns={{
						base: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
					}}
					columnGap={{
						base: 0,
						md: 4,
					}}
					rowGap={{
						base: 4,
						md: 6,
					}}
					className="text-base"
					style={{
						margin: 0,
					}}>
					<Link href={'/about'}>About Us</Link>
					<a
						target={'_blank'}
						rel="noreferrer"
						href={constants.documentationUrl}>
						Docs
					</a>
					<Link href={'/token'}>Token</Link>
					<Link href={'/posts'}>Blog</Link>
					<a
						target={'_blank'}
						rel="noreferrer"
						href={'https://docs.divaprotocol.io/'}>
						DIVA Slide Deck
					</a>
					<a
						target={'_blank'}
						rel="noreferrer"
						href={constants.peckShieldAudit}>
						Peckshield Audit
					</a>
				</Grid>
				<div className="hidden md:block">
					<SocialMediaContainer />
				</div>
			</Stack>
			<Stack
				vertical
				className="space-x-16 justify-between px-8 md:px-20 items-center h-20">
				<span>© DIVA Protocol</span>
				<div className="md:hidden">
					<SocialMediaContainer />
				</div>
			</Stack>
			<div
				style={{
					position: 'absolute',
					width: '892px',
					height: '892px',
					left: '0px',
					top: '66px',
					background:
						'linear-gradient(116.38deg, rgba(0, 56, 255, 0.33) 6.37%, rgba(22, 227, 216, 0.33) 89.66%)',
					filter: 'blur(162px)',
					zIndex: -1,
				}}></div>
		</footer>
	)
}

const SocialMediaContainer = () => (
	<Stack vertical className="items-center">
		<a target={'_blank'} rel="noreferrer" href={constants.twitterLink}>
			<Image src="/logos/twitter.svg" height="24" width="24" alt="Twitter" />
		</a>
		<a target={'_blank'} rel="noreferrer" href={constants.discordLink}>
			<Image src="/logos/discord.svg" height="27" width="27" alt="Discord" />
		</a>
		<a target={'_blank'} rel="noreferrer" href={constants.githubLink}>
			<Image src="/logos/github.svg" height="22" width="22" alt="Github" />
		</a>
		<a target={'_blank'} rel="noreferrer" href={constants.mailLink}>
			<Image src="/logos/mail.svg" height="32" width="32" alt="mail" />
		</a>
	</Stack>
)

import { Stack } from '../layout/Stack'
import Image from 'next/image'
import Link from 'next/link'
import { Grid } from '@chakra-ui/react'
import constants from '../../constants/index'

export function Footer() {
	return (
		<footer className="mt-32 text-white font-sans text-opacity-80 relative h-[233px] overflow-y-hidden bg-[rgba(255, 255, 255, 0.06)]">
			<Stack
				vertical
				className="space-x-16 justify-between px-20 py-10 border-b border-white border-opacity-10">
				<Image src="/DivaLogo.svg" height="136" width="136" alt="Diva Logo" />
				<Grid
					templateColumns="repeat(4, 1fr)"
					columnGap={4}
					rowGap={6}
					className="text-base">
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
				<Stack vertical>
					<a target={'_blank'} rel="noreferrer" href={constants.twitterLink}>
						<Image
							src="/logos/twitter.svg"
							height="24"
							width="24"
							alt="Twitter"
						/>
					</a>
					<a target={'_blank'} rel="noreferrer" href={constants.discordLink}>
						<Image
							src="/logos/discord.svg"
							height="27"
							width="27"
							alt="Discord"
						/>
					</a>
					<a target={'_blank'} rel="noreferrer" href={constants.githubLink}>
						<Image
							src="/logos/github.svg"
							height="22"
							width="22"
							alt="Github"
						/>
					</a>
				</Stack>
			</Stack>
			<Stack
				vertical
				className="space-x-16 justify-between px-20 items-center h-20">
				<span>© DIVA Protocol</span>
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

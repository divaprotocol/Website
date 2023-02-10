import Image from 'next/image'
import Link from 'next/link'
import constants from '../../constants/index'

export const Navigation = () => {
	return (
		<nav className="flex flex-row justify-between w-full relative z-10 px-12">
			<Link href={'/'}>
				<Image alt="Diva Logo" src="/DIVALogo.png" width={131} height={24} />
			</Link>
			<ul className="space-x-4 flex flex-row">
				<li>
					<Link href="/about">About Us</Link>
				</li>
				<li>
					<Link href="/dApps">dApps</Link>
				</li>
				<li>
					<Link href="/rewards">Reward</Link>
				</li>
				<li>
					<Link href={constants.documentationUrl} target="_blank">
						Docs
					</Link>
				</li>
				<li>
					<Link href="/token">Token</Link>
				</li>
				<li>
					<Link href="/posts">Blog</Link>
				</li>
				{/**
				 * ADD COMMUNITYY
				 */}
			</ul>
		</nav>
	)
}

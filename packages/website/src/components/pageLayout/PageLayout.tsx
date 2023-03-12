import React from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import { Footer } from './Footer'

const PageLayout = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<>
			<Head>
				<title>DIVA Protocol</title>
				<link rel="icon" href="/logo.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="DIVA Protocol is a smart contract based operating system that allows its users to create and settle fully customizable financial derivative contracts peer-to-peer."
				/>
				<meta property="og:title" content="DIVA Protocol" />
				<meta
					property="og:description"
					content="DIVA Protocol is a smart contract based operating system that allows its users to create and settle fully customizable financial derivative contracts peer-to-peer."
				/>
				<meta property="og:image" content="/images/featuresbg.png" />
			</Head>
			<div className="flex-col justify-between min-h-full font-body text-base bg-black text-slate-400 min-w-full max-w-full">
				<div className="text-center  py-12 px-8 pt-4 overflow-x-hidden ">
					<Navigation />
					{children}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default PageLayout

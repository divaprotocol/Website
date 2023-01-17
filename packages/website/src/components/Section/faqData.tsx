import React from 'react'
import { Link, Text } from '@chakra-ui/react'

export const faqData = [
	{
		title: 'What is DIVA Protocol?',
		body: (
			<>
					DIVA Protocol is the first truly universal and flexible smart contract
					based operating system for derivative applications. With DIVA
					Protocol, developers can build a wide range of derivative
					applications, including insurance, structured products, prediction
					markets, conditional donations, and swaps, all in a permissionless and
					trustless way, without requiring smart contract programming skills.
			</>
		),
	},
	{
		title: 'Which problem does DIVA Protocol solve?',
		body: (
			<>
					The traditional way of creating and managing derivative products
					relies on centralized intermediaries. This introduces counterparty
					risk, where the users&apos; funds are at risk if the intermediary
					defaults or becomes insolvent. This also creates a barrier of entry as
					the creation and management of derivative products is typically
					reserved for banks and not easily accessible for normal individuals.
					Another issue is reduced liquidity as these products are issued in
					isolated systems which means assets are typically not tradeable
					outside of the issuer&apos;s infrastructure.
					<br></br>
					<br></br>
					DIVA Protocol is a smart contract-based operating system that
					addresses these issues. DIVA Protocol eliminates reliance on
					intermediaries, improves security by fully collateralizing products
					and eliminates counterparty risk. Additionally, it expands access to
					the creation of derivative products to a wider range of users, and
					improves liquidity by opening up the infrastructure layer for
					derivatives.
			</>
		),
	},
	{
		title: 'What can I build on top of DIVA Protocol?',
		body: (
			<>
				With DIVA Protocol, users can build a wide range of derivative
				applications, including insurance, structured products, prediction
				markets, conditional donations, and swaps, all in a permissionless and
				trustless way. One of the unique features is the possibility to impose
				transfer restrictions on derivative assets, which makes it particularly
				well-suited for traditional financial institutions that must comply with
				KYC and AML regulations.
      </>
		),
	},
	{
		title: 'How can I get started?',
		body: (
			<>
				Head over to the <a
					href='https://www.divaprotocol.io/dapps'
					className='underline mx-1'
					target={'_blank'} rel="noreferrer">
					DIVA dApps
				</a> page to explore all the
				applications that have been already built on top of DIVA Protocol.
				<br></br>
				<br></br>
				If you want to develop an application yourself, head over to our <a
					href='https://docs.divaprotocol.io/'
					className='underline mx-1'
					target={'_blank'} rel="noreferrer">
					docs
				</a>.		
      </>
		),
	},
	{
		title: 'What are the utilities of the $DIVA Token?',
		body: (
			<>
				$DIVA is the native token that is used to govern the DIVA Protocol. The
				token model was designed to enable efficient and effective governance
				and offer flexibility to adapt to the various stages of the protocol
				lifecycle and constantly changing market conditions. There will be a
				maximum of 100m tokens in circulation. 40% will be released over 2 years
				and the remaining 60% over 30 years.
      </>
		),
	},
]

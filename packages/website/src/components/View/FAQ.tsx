import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import {
	Stack,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Box,
} from '@chakra-ui/react'
import { Card } from '../ui/Card'
import { Heading } from '../../components/typography/Heading'
import { Highlight } from '../../components/typography/Highlight'

const FAQSection = () => {
	return (
		<Stack className="container max-w-7xl m-auto space-y-20 relative pt-32">
			<Heading as="h3" size="lg">
				Frequently Asked <Highlight>Partners</Highlight>
			</Heading>
			{/* left ellipse */}
			<div
				style={{
					position: 'absolute',
					width: '524px',
					height: '524px',
					left: '101px',
					top: '187px',
					background:
						'linear-gradient(116.38deg, rgba(0, 56, 255, 0.33) 6.37%, rgba(22, 227, 216, 0.33) 89.66%)',
					filter: 'blur(162px)',
				}}></div>
			{/* right ellipse */}
			<div
				style={{
					position: 'absolute',
					width: '455px',
					height: '455px',
					right: '0px',
					top: '445px',
					background:
						'linear-gradient(116.38deg, rgba(0, 56, 255, 0.2) 6.37%, rgba(22, 227, 216, 0.2) 89.66%)',
					filter: 'blur(162px)',
				}}></div>
			<Accordion
				allowToggle
				defaultIndex={[0]}
				className="z-10 flex flex-col items-center">
				{faqData.map((faq, index) => (
					<FAQItem title={faq.title} body={faq.body} key={index} />
				))}
			</Accordion>
		</Stack>
	)
}

const FAQItem = ({ title, body }) => (
	<Card className="py-2 my-4 px-5 w-[70%]">
		<AccordionItem borderRadius="16px" mx="auto" border={'none'}>
			{({ isExpanded }) => (
				<>
					<AccordionButton>
						<Box
							flex="1"
							textAlign="left"
							fontWeight={['350', '350', '350', '700', '700']}
							fontSize={20}
							color="white">
							{title}
						</Box>
						{isExpanded ? (
							<MinusIcon color="white" fontSize="12px" />
						) : (
							<AddIcon color="white" fontSize="12px" />
						)}
					</AccordionButton>
					<AccordionPanel fontSize={16} color="#A4A4A4" textAlign="left">
						{body}
					</AccordionPanel>
				</>
			)}
		</AccordionItem>
	</Card>
)

export const faqData = [
	{
		title: 'What is DIVA Protocol?',
		body: (
			<>
				DIVA Protocol is the first truly universal and flexible smart contract
				based operating system for derivative applications. With DIVA Protocol,
				developers can build a wide range of derivative applications, including
				insurance, structured products, prediction markets, conditional
				donations, and swaps, all in a permissionless and trustless way, without
				requiring smart contract programming skills.
			</>
		),
	},
	{
		title: 'Which problem does DIVA Protocol solve?',
		body: (
			<>
				The traditional way of creating and managing derivative products relies
				on centralized intermediaries. This introduces counterparty risk, where
				the users&apos; funds are at risk if the intermediary defaults or
				becomes insolvent. This also creates a barrier of entry as the creation
				and management of derivative products is typically reserved for banks
				and not easily accessible for normal individuals. Another issue is
				reduced liquidity as these products are issued in isolated systems which
				means assets are typically not tradeable outside of the issuer&apos;s
				infrastructure.
				<br></br>
				<br></br>
				DIVA Protocol is a smart contract-based operating system that addresses
				these issues. DIVA Protocol eliminates reliance on intermediaries,
				improves security by fully collateralizing products and eliminates
				counterparty risk. Additionally, it expands access to the creation of
				derivative products to a wider range of users, and improves liquidity by
				opening up the infrastructure layer for derivatives.
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
				Head over to the{' '}
				<a
					href="https://www.divaprotocol.io/dapps"
					className="underline mx-1"
					target={'_blank'}
					rel="noreferrer">
					DIVA dApps
				</a>{' '}
				page to explore all the applications that have been already built on top
				of DIVA Protocol.
				<br></br>
				<br></br>
				If you want to develop an application yourself, head over to our{' '}
				<a
					href="https://docs.divaprotocol.io/"
					className="underline mx-1"
					target={'_blank'}
					rel="noreferrer">
					docs
				</a>
				.
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

export default FAQSection

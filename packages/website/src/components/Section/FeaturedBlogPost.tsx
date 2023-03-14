import { Stack, Flex, Box, Heading, Button, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { Post } from '../../pages'
import BlogMeta from './BlogMeta'

const FeaturedBlogPost = ({ post }: { post: Post }) => {
	return (
		<Stack
			spacing={{ base: 8, md: 10 }}
			py={{ base: 20, md: 28 }}
			direction={{ base: 'column', md: 'row' }}>
			<Flex
				justify={'center'}
				align={'center'}
				position={'relative'}
				w={'full'}>
				<Image
					alt={'Hero Image'}
					align={'center'}
					w={'100%'}
					h={'100%'}
					src={`/images/posts/${post.coverImage}`}
					className="rounded-2xl"
				/>
			</Flex>
			<Stack spacing={{ base: 5, md: 10 }} className="py-6 order-1">
				<Box>
					<h1 className="rounded font-serif px-4 py-2 bg-white bg-opacity-10 w-min whitespace-nowrap text-white text-sm">
						Featured Blog Post
					</h1>
				</Box>
				<Link href={`/posts/${post.slug}`} passHref>
					<a className="z-10">
						<Heading
							lineHeight={1.1}
							fontWeight={500}
							fontSize={{ base: '20px', sm: '30px', lg: '40px' }}
							color="white"
							className="p-0 m-0 mb-6 text-left">
							{post.title}
						</Heading>
						<BlogMeta author={post.author} publishedAt={post.date} />
					</a>
				</Link>
			</Stack>
		</Stack>
	)
}

export default FeaturedBlogPost

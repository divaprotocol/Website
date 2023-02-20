import { Box, SimpleGrid, Link, Stack } from '@chakra-ui/react'
import { getAllPosts } from '../api/getPosts'
import PageLayout from '../../components/pageLayout/PageLayout'
import BlogCard from '../../components/Section/BlogCard'
import FeaturedBlogPost from '../../components/Section/FeaturedBlogPost'
import { Post } from '..'
// import Link from 'next/link'
import { format } from 'date-fns'

export const getStaticProps = async () => {
	const posts = await getAllPosts()

	return {
		props: {
			posts: posts
				.sort((a, b) => {
					return b.date.getTime() - a.date.getTime()
				})
				.map((post) => ({
					...post,
					date: format(post.date, 'MMMM dd, yyyy'),
				})),
		},
	}
}

export default function Blog({ posts }: { posts: Post[] }) {
	const featured = posts.find((v) => v.featured === true)
	return (
		<PageLayout>
			<Box
				px={['20px', '30px', '50px', '65px', '80px']}
				justifyContent="center"
				w="100%"
				className="relative">
				{featured != null && <FeaturedBlogPost post={featured} />}
				<Stack className="mb-6">
					<h1 className="rounded font-serif px-4 py-2 bg-white bg-opacity-10 w-min whitespace-nowrap text-white text-sm">
						All Articles
					</h1>
				</Stack>
				<SimpleGrid columns={[1, 2, 2, 3, 4]} spacing="2rem">
					{posts?.map((post) => (
						<Link key={post.slug} href={`/posts/${post.slug}`}>
							<BlogCard
								coverImageAlt={post.coverImageDescription}
								title={post.title}
								coverImage={post.coverImage}
								author={post.author}
								publishedAt={post.date}
							/>
						</Link>
					))}
				</SimpleGrid>
				<div
					style={{
						position: 'absolute',
						width: '402px',
						height: '329px',
						left: '821px',
						top: 'calc(50% - 329px/2 - 948px)',
						background:
							'linear-gradient(116.38deg, rgba(0, 56, 255, 0.3) 6.37%, rgba(22, 227, 216, 0.3) 89.66%)',
						filter: 'blur(131.902px)',
						transform: 'matrix(-1, 0, 0, 1, 0, 0)',
					}}></div>
				<div
					style={{
						position: 'absolute',
						width: '524px',
						height: '524px',
						left: '-200px',
						top: '187px',
						background:
							'linear-gradient(116.38deg, rgba(0, 56, 255, 0.3) 6.37%, rgba(22, 227, 216, 0.3) 89.66%)',
						filter: 'blur(131.902px)',
						transform: 'matrix(-1, 0, 0, 1, 0, 0)',
					}}></div>
				<div
					style={{
						position: 'absolute',
						width: '726px',
						height: '524px',
						left: '1204px',
						top: 'calc(65% - 594px/2 - 434.5px)',
						background:
							'linear-gradient(116.38deg, rgba(0, 56, 255, 0.2) 6.37%, rgba(22, 227, 216, 0.2) 89.66%)',
						filter: 'blur(131.902px)',
						transform: 'matrix(-1, 0, 0, 1, 0, 0)',
					}}></div>
			</Box>
		</PageLayout>
	)
}

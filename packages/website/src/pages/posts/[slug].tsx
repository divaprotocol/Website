import Head from 'next/head'
import Image from 'next/image'
import { Post } from '..'
import { format, parseISO } from 'date-fns'
import Tweet from 'react-tweet-embed'
import { HOME, IMAGE_PATH } from '../../constants'
// @ts-ignore
import { getAllPosts, getPostBySlug } from '../api/getPosts'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'
import { RandomVerticalSvgLine } from '../../components/RandomVerticalSvgLine'
import PageLayout from '../../components/pageLayout/PageLayout'

export async function getStaticPaths() {
	const posts = getAllPosts()
	return {
		paths: posts.map((post) => ({
			params: { slug: post.slug },
		})),
		fallback: false,
	}
}

type PostPageProps = {
	source: MDXRemoteSerializeResult
	post: Post
}

const components = {
	h2: (props) => (
		<h2 {...props} className="text-white font-serif">
			{props.children}
		</h2>
	),
	p: (props) => (
		<p {...props} className="text-white opacity-80 font-serif">
			{props.children}
		</p>
	),
	ul: (props) => (
		<ul {...props} className="text-white opacity-80 font-serif">
			{props.children}
		</ul>
	),
	a: (props) => (
		<a {...props} className="text-white opacity-80 font-serif">
			{props.children}
		</a>
	),
	Tweet,
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = getPostBySlug(params?.slug as string)

	const mdxSource = await serialize(post.content, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {},
		scope: {
			...post,
			date: (post.date as unknown as Date).toISOString(),
		},
	})

	return {
		props: {
			source: mdxSource,
			post: {
				...post,
				date: (post.date as unknown as Date).toISOString(),
			},
		},
	}
}

const PostPage = ({ source, post }: PostPageProps) => {
	return (
		<PageLayout>
			<Head>
				<title>Diva Protocol - {post.title}</title>
				<meta name="description" content={post.description} />
				<meta name="twitter:description" content={post.description} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:image:src"
					content={`${HOME}${IMAGE_PATH}${post.coverImage}`}
				/>
				<meta name="twitter:image:alt" content={post.coverImageDescription} />
				<meta
					property="og:image"
					content={`${HOME}${IMAGE_PATH}${post.coverImage}`}
				/>
				<meta property="og:description" content={post.description} />
				<meta property="og:title" content={post.title} />
				<link rel="icon" href="/logo.svg" />
				<meta
					name="twitter:title"
					content="DIVA Protocol - Derivatives on the Ethereum blockchain"
				/>
			</Head>
			<article className="pb-12 relative mt-10 flex flex-col items-center ">
				<Image
					src={`${IMAGE_PATH}${post.coverImage}`}
					alt={post.coverImageDescription}
					width={post.coverImageWidth}
					height={post.coverImageHeight}
					className="rounded-2xl"
				/>
				<div className="pt-12 prose max-w-2xl m-auto text-white px-10">
					<h1 className="text-white">{post.title}</h1>
					<p className="text-slate text-white opacity-50">
						By{' '}
						<strong className="text-[#E0E0E0] opacity-100">
							{post.author}
						</strong>{' '}
						at <time>{format(parseISO(post.date), 'MMMM dd, yyyy')}</time>
					</p>
					<MDXRemote {...source} components={components} />
				</div>
			</article>
		</PageLayout>
	)
}

export default PostPage

import React from 'react'
import {
	Wrap,
	VStack,
	Heading,
	Text,
	Image,
	Box,
	WrapItem,
} from '@chakra-ui/react'
import BlogMeta from './BlogMeta'

const BlogCard = ({
	title,
	coverImage,
	coverImageAlt,
	author,
	publishedAt,
}: {
	title: string
	coverImage: string
	coverImageAlt: string
	author: string
	publishedAt: string
}) => {
	return (
		<VStack
			spacing="6"
			cursor="pointer"
			align="flex-start"
			borderRadius={8}
			className="z-10">
			<Image
				src={`images/posts/${coverImage}`}
				width="full"
				alt={coverImageAlt}
				className="rounded-2xl"
			/>
			<Wrap spacing="16px" direction="column" px={0}>
				<Heading
					fontSize="22px"
					fontWeight="bold"
					color="white"
					_hover={{ textDecoration: 'underline' }}
					className="text-left">
					{title}
				</Heading>
				<BlogMeta author={author} publishedAt={publishedAt} />
			</Wrap>
		</VStack>
	)
}

export default BlogCard

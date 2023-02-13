/** @type {import('next').NextConfig} */
const nextConfig = {}

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
})

module.exports = withMDX({
	pageExtensions: ['tsx', 'ts', 'js', 'jsx', 'mdx'],
	reactStrictMode: true,
	experimental: {
		newNextLinkBehavior: false,
	},
})

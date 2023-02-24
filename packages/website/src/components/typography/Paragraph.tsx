import { HTMLAttributes, PropsWithChildren } from 'react'

export const Paragraph = (
	props: PropsWithChildren<{
		className?: HTMLAttributes<HTMLParagraphElement>['className']
	}>
) => {
	return (
		<p className={`leading-7 tracking-wider max-w-3xl ${props.className}`}>
			{props.children}
		</p>
	)
}

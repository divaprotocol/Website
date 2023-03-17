import { HTMLAttributes, PropsWithChildren } from 'react'

export const Card = (
	props: PropsWithChildren<{
		className?: HTMLAttributes<HTMLDivElement>['className']
	}>
) => {
	return (
		<div
			className={`rounded-3xl bg-white bg-opacity-5 p-5 ${
				props.className || ''
			}`}>
			{props.children}
		</div>
	)
}

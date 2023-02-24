import { DetailedHTMLProps, HTMLAttributes } from 'react'

export function Container(
	props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
	return (
		<div className={`max-w-7xl m-auto ${props.className || ''}`}>
			{props.children}
		</div>
	)
}

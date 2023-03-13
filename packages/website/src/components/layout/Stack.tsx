import { DetailedHTMLProps, HTMLAttributes } from 'react'

export const Stack = ({
	vertical,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	vertical?: boolean
}) => {
	return (
		<div
			{...props}
			className={
				(vertical ? 'flex flex-row space-x-4' : 'space-y-7 flex flex-col') +
				' ' +
				(props.className || '')
			}>
			{props.children}
		</div>
	)
}

import { PropsWithChildren, useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'

//button props
export interface ButtonProps {
	primary?: boolean
	className?: string
	onClick?: () => void
	innerClassName?: string
	disabled?: boolean
	isLoading?: boolean
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
	const [innerClassName, setInnerClassName] = useState(
		'px-8 py-4 [border-radius:2rem]'
	)

	const [className, setClassName] = useState(
		'text-white font-medium flex [border-radius:2rem] bg-transparent font-sans bg-gradient-to-l from-blue-700 to-teal-500 overflow-hidden [padding:2px] shadow-2xl shadow-black hover:scale-[1.02] transition-all'
	)

	useEffect(() => {
		if (props.primary) {
			setInnerClassName('px-8 py-4 [border-radius:2rem] bg-transparent')
		} else {
			setInnerClassName('px-8 py-4 [border-radius:2rem] bg-slate-900')
		}
	}, [props.primary])

	return (
		<button
			className={`${className} ${props.className} ${
				props.disabled && 'opacity-50 cursor-not-allowed'
			}`}
			onClick={props.onClick}
			disabled={props.disabled}>
			<span className={`${innerClassName} ${props.innerClassName}`}>
				{props.isLoading ? <Spinner /> : props.children}
			</span>
		</button>
	)
}

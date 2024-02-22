import { useState } from 'react'
import { Icon, Typography } from '@/shared'
import cl from './DropdownFilter.module.scss'

const { Text } = Typography

type OptionValues = 'deffered_courses' | 'completed_courses' | 'current_courses'

type TDropdownFilter = {
	title: string
	value: OptionValues
}

const selectOptions = {
	current_courses: 'Current Courses',
	deffered_courses: 'Deferred Courses',
	completed_courses: 'Completed Courses'
} as const

const courseStatusOptions: TDropdownFilter[] = [
	{ title: 'Current Courses', value: 'current_courses' },
	{ title: 'Deferred Courses', value: 'deffered_courses' },
	{ title: 'Completed Courses', value: 'completed_courses' }
]

export const DropdownFilter = () => {
	const [value, setValue] = useState<OptionValues>()
	const [isOpen, setIsOpen] = useState(false)

	const handleSelect = (value: OptionValues) => {
		setValue(value)
		setIsOpen(false)
	} 

	return (
		<div className={cl.root}>
			<div
				className={`${cl.root__select_dropdown} ${isOpen && cl.root__select_dropdown_open}`}
				onClick={() => setIsOpen(prev => !prev)}>
				<div
					className={`${isOpen && cl.root__select_default_open} ${cl.root__option_text} ${cl.root__select_default}`}>
					<div>
						<Text
							text={
								value ? selectOptions[value] : 'Current Courses'
							}
							className={cl.root__option_text}
						/>
					</div>
					<div className={cl.root__iconWrapper}>
						<Icon name={'Arrow'} />
					</div>
				</div>
			</div>

			{isOpen ? (
				<ul className={cl.root__dropdown_options}>
					{courseStatusOptions.map(option => (
						<li
							className={cl.root__select_option}
							onClick={() => handleSelect(option.value)}>
							<Text
								text={option.title}
								className={cl.root__option_text}
							/>
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

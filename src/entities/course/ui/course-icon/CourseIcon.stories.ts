import type { Meta, StoryObj } from '@storybook/react'

import { CourseIcon } from './CourseIcon'

const meta: Meta<typeof CourseIcon> = {
	title: 'entities/CourseIcon',
	component: CourseIcon,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		className: {
			type: 'string',
			description: 'ClassName for customization component'
		},
		name: {
			type: 'string',
			description: 'Name'
		},
		color: {
			type: 'string',
			description: 'BackgroundColor change'
		}
	}
} satisfies Meta<typeof CourseIcon>

export default meta

type Story = StoryObj<typeof CourseIcon>

export const IconColorGreen: Story = {
	args: {
        color: '#358844',
        className: 'iconColorGreen',
        name: 'Course'
	}
}
export const IconColorOrange: Story = {
	args: {
        color: '#ED8242',
        className: 'iconColorOrange',
        name: 'Course'
        
	}
}
export const IconColorBlue: Story = {
	args: {
        color: '#2796EC',
        className: 'iconColorBlue',
        name: 'Course'
        
	}
}


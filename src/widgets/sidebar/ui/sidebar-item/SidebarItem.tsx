import { Typography } from '@/shared'
import { Icon } from '@/shared/ui/icon'
import { type IconName } from '@/shared/ui/icon'
import cl from './SidebarItem.module.scss'

const { Title } = Typography

export const SidebarItem = ({
	title,
	icon
}: {
	title: string
	icon: IconName
}) => {
	return (
		<div className={cl.root}>
			<Icon
				name={icon}
				className={cl.root__sidebar_item_icon}
			/>
			<Title
				text={title}
				variant="h4"
				className={cl.root__sidebar_item_title}
			/>
		</div>
	)
}

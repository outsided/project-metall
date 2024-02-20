import { Link } from 'react-router-dom'
import { type IconName, Icon, Typography } from '@/shared'
import cl from './SidebarItem.module.scss'

const { Title } = Typography

export const SidebarItem = ({
	title,
	icon,
	route
}: {
	title: string
	icon: IconName
	route: string
}) => {
	return (
		<Link to={route} className={cl.root}>
			<Icon
				name={icon}
				className={cl.root__sidebar_item_icon}
			/>
			<Title
				text={title}
				variant="h4"
				className={cl.root__sidebar_item_title}
			/>
		</Link>
	)
}
import { Link } from 'react-router-dom'
import { IconName } from '@/shared'
/* eslint-disable import/no-internal-modules */
import mainLogo from '@/shared/assets/images/mainLogo.png'
import { SidebarItem } from '../sidebar-item'
import cl from './Sidebar.module.scss'

type TSidebarItem = {
	title: string
	icon: IconName
	route: string 
}

const studentItems: TSidebarItem[] = [
	{ title: 'Dashboard', icon: 'Dashboard', route: '#' },
	{ title: 'Courses', icon: 'Courses', route: '#' },
	{ title: 'Calendar', icon: 'Calendar', route: '#' },
	{ title: 'Teachers', icon: 'Teachers', route: '#' },
	{ title: 'Messenger', icon: 'Messenger', route: '#' },
	{ title: 'Info Portal', icon: 'InfoPortal', route: '#' }
]

export const Sidebar = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__upperContainer}>
				<Link
					to={'/'}
					className={cl.root__mainlogo}>
					<img
						src={mainLogo}
						alt="Main logo"
					/>
				</Link>
				<div className={cl.root__sidebar_items}>
					{studentItems.map(item => (
						<SidebarItem
							title={item.title}
							icon={item.icon}
							route={item.route}
						/>
					))}
				</div>
			</div>
			<SidebarItem
				title={'Logout'}
				icon={'Logout'}
			/>
		</div>
	)
}

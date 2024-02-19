import cl from './HeaderNotificationItem.module.scss'

export type THeaderNotificationItemProps = {
	name: string
	description: string
	date: string //not sure if we use string type here instead of date
}

const HARDCODED_USER_IMAGE =
	'https://s3-alpha-sig.figma.com/img/1fc4/add1/131d549172658e1725fe4fd6b2139296?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZqvfrkGadbY~8bDBBXdxvL46jETLK2vlM7BJnKTAbjOW3zIC0jt0FGD6qNbWDIufeLnAyb3pgIq1aXEJQMY4OwdL6hE~Gm4-69EPC8J2guH2ZIIfkSSWF-2mq63i7Vz2OqeFKd-~PhBf~MiFBjiVT6MdpwX-no-DzrURV54PzfMehi67G4s7R0opCu7k99N7kNSSOpgWJrWimGTLETD0Tt5goWLAWYoH89foXI1qlIDCOe3R18f4njupLaauZ-K2PGA3hKl1DxuzYF5DoUy-w9M9~7rPXEakUCFl~2pFy2v6MomxTFrb~n7GTBCZE82btuJoLsRQAYz8GLu04-zSJg__'
// hardcoded profile image as there's no image prop yet

export const HeaderNotificationItem: React.FC<
	THeaderNotificationItemProps
> = props => {
	const { name, description, date } = props

	return (
		<div className={cl.root}>
			<div>
				<img
					className={cl.root__user__profile_image}
					src={HARDCODED_USER_IMAGE}
					alt="profile_image"
				/>
			</div>
			<div className={cl.root__notification_info}>
				<div className={cl.root__notification_header}>
					<span className={cl.root__user_name}> {name} </span>
					<span className={cl.root__notification_description}>
						{description}
					</span>
				</div>
				<div>
					<span className={cl.root__notification_date}>{date}</span>
				</div>
			</div>
		</div>
	)
}

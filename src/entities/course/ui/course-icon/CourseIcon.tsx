import { classNames } from '@/shared'
import {type IconName, Icon } from '@/shared'
import cl from './CourseIcon.module.scss'


export const CourseIcon = ({className, color, name }: {className:string, color: string, name: IconName}) => {
  return (
    <div style={{ backgroundColor: color }} className={classNames(cl.root, className)}>
      <Icon name={name} className={cl.root__icon} />
    </div>
  )
}



import { classNames } from '@/utils/classNames'
import styles from './styles.module.scss'



type TProps = {
    className: string,
    text: string,
    variant: 'h1'|'h2'|'h3'|'title',
    color: 'black'|'white',

}
const colorMap = {
    black: styles.root__black,
    white: styles.root__white,  
} 
const variantMap ={
    h1: styles.root__h1,
    h2: styles.root__h2,
    h3: styles.root__h3,
    title:styles.root__title,
}
export const Title = ({
    className,
    text,
    variant,
    color,


}:TProps) => {
    return (
        <h1 className={classNames(colorMap[color],variantMap[variant], className ?? '',) }>
            {text}
        </h1>
    )
}
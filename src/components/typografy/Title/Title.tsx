
import { classNames } from '@/utils/classNames'
import styles from './styles.module.scss'



type TProps = {
    className?: string,
    text: string,
    variant?: 'h1'|'h2'|'h3',
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
   
}

export const Title = ({
    className = "",
    text,
    variant = 'h2' ,
    color,
}:TProps) => {
    switch (variant) {
        case 'h1':
            return (
                <h1 className={classNames(colorMap[color],variantMap[variant], className,) }>
                    {text}
                </h1>  
            )
        case 'h2':
            return (
                <h2 className={classNames(colorMap[color],variantMap[variant], className,) }>
                     {text}
                </h2>  
            )
        case 'h3': return (
             <h3 className={classNames(colorMap[color],variantMap[variant], className,) }>
                    {text}
             </h3>  
        )
    }
}

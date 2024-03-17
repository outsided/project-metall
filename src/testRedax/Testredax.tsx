'use client'
import styles from './styles.module.css'
import { PRODUCTS } from './PRODUCTS'
export const TestRedax = () => {
   
    return (
        <div className={styles.wrapper}>
            <div className={styles.first}>
                {PRODUCTS.map(item => <div key={item.id} className={styles.wrap}>
                              <h1>{item.title}</h1>
                              <p>{item.price}</p>
                              <p>{item.quantity}</p>
                              <button className={styles.button} >add to basket</button>
                </div>)}
            </div>
            <div className={styles.wrap_two}>       
                   <div className={styles.two}>
                        <h1>das</h1>
                        <p>dasdasd</p>  
                            <h1>dasd</h1> 
                            <p>dasdas</p>
                        <span className={styles.del} >&times;</span>                  
                    </div>
                    
            </div>
        </div>
    )
}

import styles from './styles.module.scss'
import Image from 'next/image';
import { Typografy } from '@/components/Typography/typography';
const Typography = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.comp_typography}>
                 <div>
                     <h3 className={styles.h3_first}>О НАШЕЙ КОМПАНИИ</h3>
                     <p className={styles.discription}>Компания Производственная компания РС успешно работает на рынке металлургических материалов с 2015 года. 
                    За это время мы расширили ассортимент наших товаров, предоставляя клиентам широкий выбор металлопроката высокого качества. 
                    Наш ассортимент включает практически все виды металлопроката, 
                    доступные как для оптовых, так и для розничных заказов.</p>
                 </div>
                <div className={styles.chuse_uss}>
                    <h3 className={styles.h3_seccond}>ПОЧЕМУ ВЫБИРАЮТ НАС?</h3>
                    <div className={styles.map}>
                        {Typografy.map(card => 
                             <div key={card.id} className={styles.typography_card}>
                                  <Image src={card.img} alt='galochka'/>
                                  <h5 className={styles.h5_card}>{card.title}</h5>
                                  <p className={styles.p_card}>{card.discrip}</p>
                            </div>
                        )}
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Typography;
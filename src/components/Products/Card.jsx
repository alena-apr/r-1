import styles from './card.module.scss'
import t from 'prop-types';

Card.propTypes = {
    title: t.string, 
    price: t.number, 
    rest: t.number
}


function Card({ title, price, rest }) {
    return <>
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>Цена: {price} &#8381;</div>
            <div className={styles.rest}>Осталось: {rest}</div>
        </div>
    </>
}

export default Card;
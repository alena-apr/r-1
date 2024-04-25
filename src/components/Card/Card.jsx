import styles from "./card.module.scss";
import btn from "./../../routes/Form/form.module.scss";
import t from "prop-types";

import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";

import { add, remove } from "./../../store/cart";

Card.propTypes = {
  title: t.string,
  price: t.number,
  rest: t.number,
  id: t.number,
};

function Card({ title, price, rest, id }) {
    const dispatch = useDispatch();
    const items = useLoaderData();

    
    const product = items.find(item => item.id === id);
    // console.log(product)
    

  return (
    <>
      <div className={styles.card}>
        <Link to={`${id}`}>
          <div className={styles.title}>{title}</div>
        </Link>
        <div className={styles.price}>Цена: {price} &#8381;</div>
        <div className={styles.rest}>Осталось: {rest}</div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault(), dispatch(add(product));
            }}
            className={`${btn.btn} ${btn["btn-small"]}`}
          >
            добавить
          </button>
          <button
            onClick={(e) => {
              e.preventDefault(), dispatch(remove(id));
            }}
            className={`${btn.btn} ${btn["btn-small"]}`}
          >
            убрать
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

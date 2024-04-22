import styles from "./card.module.scss";
import btn from "./../../routes/Form/form.module.scss";
import t from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./../../store/cart";

Card.propTypes = {
  title: t.string,
  price: t.number,
  rest: t.number,
  id: t.number,
};

function Card({ title, price, rest, id }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const product = {
    title: title,
    price: price,
    rest: rest,
    id: id,
  };
  console.log(items);
  console.log(product);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>Цена: {price} &#8381;</div>
        <div className={styles.rest}>Осталось: {rest}</div>
        <div>
          <button
            onClick={() => dispatch(add(product))}
            className={`${btn.btn} ${btn["btn-small"]}`}
          >
            добавить
          </button>
                  <button onClick={() => dispatch(remove(id))}
                      className={`${btn.btn} ${btn["btn-small"]}`}>убрать</button>
        </div>
      </div>
    </>
  );
}

export default Card;

import styles from "./card.module.scss";
import btn from "./../../../Form/form.module.scss";
import t from "prop-types";

import { Link, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import { add, remove } from "./../../../../store/cart";
// import ProductsControl from "../ProductsControl/ProductsControl";
import { addToCartThunk, itemCountSelector, removeFromCartThunk } from "./../../../../store/cart";

Card.propTypes = {
  title: t.string,
  price: t.number,
  rest: t.number,
  id: t.number,
};

function Card({ title, price, rest, id }) {
  const dispatch = useDispatch();
  const items = useLoaderData();
  const count = useSelector(state => itemCountSelector(state, id));

  let product = items.find((item) => item.id === id);
  // console.log(product);

  product = { ...product, count: 1 };
  // console.log(product);

  return (
    <>
      <div className={styles.card}>
        <Link to={`${id}`}>
          <div className={styles.title}>{title}</div>
        </Link>
        <div className={styles.price}>Цена: {price} &#8381;</div>
        <div className={styles.rest}>Осталось: {rest}</div>
        <div className={styles.rest}>Количесвто в корзине: {count}</div>
        {/* <ProductsControl product = {{...product}} /> */}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault(), dispatch(addToCartThunk(product));
            }}
            className={`${btn.btn} ${btn["btn-small"]}`}
          >
            добавить
          </button>
          <button
            onClick={(e) => {
              e.preventDefault(), dispatch(removeFromCartThunk(id));
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

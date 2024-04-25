import styles from "./../../../components/Card/card.module.scss";
import btn from "./../../../routes/Form/form.module.scss";

import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";

import { add, remove } from "../../../store/cart";

function ItemPage() {
  const item = useLoaderData();
  const dispatch = useDispatch();
  console.log(item);

  const product = {
    title: item.title,
    price: item.price,
    rest: item.rest,
    id: item.id,
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>{item.title}</div>

        <div className={styles.price}>Цена: {item.price} &#8381;</div>
        <div className={styles.rest}>Осталось: {item.rest}</div>
        <div className={styles.rest}>
          {item.reviews.map((review) => (
            <div key={review.id}>{review.text}</div>
          ))}
        </div>
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
              e.preventDefault(), dispatch(remove(product.id));
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

export default ItemPage;

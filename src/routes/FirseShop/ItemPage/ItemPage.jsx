// import ProductsControl from "../components/ProductsControl/ProductsControl";
import styles from "./../../../components/Card/card.module.scss";
import btn from "./../../../routes/Form/form.module.scss";

import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { add, remove } from "../../../store/cart";
// import { cartHasSelector } from "../../../store/cart";
import { addToCartThunk, removeFromCartThunk, changeCartThunk } from "../../../store/cart";

function ItemPage() {
  const item = useLoaderData();
  const dispatch = useDispatch();
  // console.log(item);
  // const inCart = useSelector((state) => cartHasSelector(state, item.id));

  const product = {
    id: item.id,
    title: item.title,
    price: item.price,
    rest: item.rest,
    count: 1,
  };

  // console.log(product);

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
        {/* <ProductsControl product={item} /> */}
        <div>
          {/* {!inCart && ( */}
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
                e.preventDefault(), dispatch(changeCartThunk(product, product.count +1 ));
              }}
              className={`${btn.btn} ${btn["btn-small"]}`}
            >
              +
            </button>
          {/* )} */}
          {/* {inCart && ( */}
            <button
              onClick={(e) => {
                e.preventDefault(), dispatch(removeFromCartThunk(product.id));
              }}
              className={`${btn.btn} ${btn["btn-small"]}`}
            >
              убрать
            </button>
           {/* )} */}
        </div>
      </div>
    </>
  );
}

export default ItemPage;

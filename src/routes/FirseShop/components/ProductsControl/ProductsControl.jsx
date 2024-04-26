import t from "prop-types";

import btn from "./../../../Form/form.module.scss";

import { useDispatch } from "react-redux";
import { add, remove } from "./../../../../store/cart";


ProductsControl.propTypes = {
    id: t.object,
  };


function ProductsControl(product) {
    const dispatch = useDispatch();

    console.log(product)
    
    return (
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
    )
}

export default ProductsControl;
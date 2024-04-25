import { useLoaderData } from "react-router-dom";
import main from "./../../Form/form.module.scss";
import styles from "./../../Products/products.module.scss";
import Card from "../../../components/Card/Card";

function Catalog() {
  const products = useLoaderData();
  // console.log(products);

  return (
    <>
      <main className={main.main}>
        <div> Catalog work!!</div>

        <div className={styles["cards-wrapper"]}>
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Catalog;

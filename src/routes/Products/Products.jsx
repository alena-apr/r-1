// import Layout from "../../components/Layout/Layout";
import Card from "../../components/Products/Card";
import main from "./../Form/form.module.scss";
import styles from "./products.module.scss";
import useFetch from "../../hooks/useFetch";

// `https://faceprog.ru/reactcourseapi/products/all.php`
// `https://faceprog.ru/reactcourseapi/products/?id=1000`

function Products() {
  const response = useFetch(
    `https://faceprog.ru/reactcourseapi/products/all.php`
  );

  const products = response.data;
  const httpError = !response.pending & (products == null);
  const loadingSuccess = !response.pending & (products != null);

  return (
    <>
      {/* <Layout> */}
        <main className={main.main}>
          <div> Products work!!</div>
          <div>{response.status}</div>
          <div className={styles["cards-wrapper"]}>
            {response.pending && <div>Loading...</div>}
            {loadingSuccess == 1 &&
              products.map((item) => <Card key={item.id} {...item} />)}
          </div>
          {httpError == 1 && (
            <div className={styles.error}>
              Что-то пошло не так... {response.status}
            </div>
          )}
        </main>
      {/* </Layout> */}
    </>
  );
}

export default Products;

import styles from "./firstShopIndex.module.scss";
import Layout from "../../../components/Layout/Layout";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../../store/cart";

const headerMENU = [
  { title: "Главная", to: "/first-shop/main" },
  { title: "Каталог", to: "/first-shop/catalog" },
  { title: "Авторизация", to: "/first-shop/auth" },
  { title: "Офис", to: "/first-shop/office" },
];

function FirstShopIndex() {
  const items = useSelector(state => state.cart.items);
  const total = useSelector(cartTotalSelector)


  return (
    <>
      <Layout>
        <main>
          <div className={`${styles["first-shop"]} ${styles.container}`}>
            <header className={styles.header}>
              <div className={styles.logo}>First Shop</div>

              <nav className={styles["header-nav"]}>
                {headerMENU.map(({ title, to }, i) => (
                  <Link
                    className={styles["header-nav__item"]}
                    key={`${i}-menu-item`}
                    to={to}
                  >
                    {title}
                  </Link>
                ))}
              </nav>
              <div>Товаров в корзине: {items.length} </div>
              <div>Ссума: {total} </div>
            </header>
            <Outlet />
          </div>
        </main>
      </Layout>
    </>
  );
}
export default FirstShopIndex;

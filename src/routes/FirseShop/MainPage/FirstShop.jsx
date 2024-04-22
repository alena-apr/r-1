import { Link } from "react-router-dom";

function FirstShop() {
  return (
    <>
      <div>Добро пожаловать в наш магазин!</div>
      <div>
        Вы можете <Link to="/first-shop/auth">авторизироваться</Link>{" "}
        или <Link to="/first-shop/catalog">посмотреть каталог</Link>.
      </div>
    </>
  );
}

export default FirstShop;

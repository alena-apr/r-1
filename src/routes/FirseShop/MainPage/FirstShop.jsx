import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FirstShop() {
  const user = useSelector(state => state.auth.user);
  
  return (
    <>
      <div>Добро пожаловать в наш магазин, {user?.name ?? 'гость'}!</div>
      <div>
        Вы можете <Link to="/first-shop/auth">авторизироваться</Link>{" "}
        или <Link to="/first-shop/catalog">посмотреть каталог</Link>.
      </div>
    </>
  );
}

export default FirstShop;

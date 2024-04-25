import { createBrowserRouter } from "react-router-dom";

//routes
import Main from "./../routes/Main/Main";
import PageNotFound from "./../routes/PageNotFound/PageNotFound";
import ToDoList from "./../routes/ToDoList/ToDoList";
import Form from "./../routes/Form/Form";
import Input from "./../routes/Input/Input";
import Modal from "./../routes/Modal/Modal";
import Products from "./../routes/Products/Products";
import FirstShopIndex from "../routes/FirseShop/Index/FirstShopIndex";
import FirstShop from "../routes/FirseShop/MainPage/FirstShop";
import Auth from "../routes/FirseShop/Auth/Auth";
import Catalog from "../routes/FirseShop/Catalog/Catalog";
import ItemPage from "../routes/FirseShop/ItemPage/ItemPage";
import Office from "../routes/FirseShop/Office/Office";

//loaders
import { fetchAllProducts, fetchProductById } from "../api/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <PageNotFound />,
  },
  {
    path: "todo",
    element: <ToDoList />,
  },
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "input",
    element: <Input />,
  },
  {
    path: "modal",
    element: <Modal />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "first-shop",
    element: <FirstShopIndex />,
    children: [
      {
        path: "main",
        element: <FirstShop />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "catalog",
        element: <Catalog />,
        loader: fetchAllProducts,
      },
      {
        path: "catalog/:id",
        element: <ItemPage />,
        loader: fetchProductById
      },
      {
        path: "office",
        element: <Office />,
      },
    ],
  },
]);

export default router;

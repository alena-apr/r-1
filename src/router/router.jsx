import { createBrowserRouter } from "react-router-dom";
import Main from "./../routes/Main/Main";
import PageNotFound from "./../routes/PageNotFound/PageNotFound";
import ToDoList from "./../routes/ToDoList/ToDoList";
import Form from "./../routes/Form/Form";
import Input from "./../routes/Input/Input";
import Modal from "./../routes/Modal/Modal";
import Products from "./../routes/Products/Products";
import FirstShop from "../routes/FirseShop/MainPage/FirstShop";
import Auth from "../routes/FirseShop/Auth/Auth";
import Office from "../routes/FirseShop/Office/Office";
import FirstShopIndex from "../routes/FirseShop/Index/FirstShopIndex";
import Catalog from "../routes/FirseShop/Catalog/Catalog";
import Card from "../components/Products/Card";
import { getItemByIdLoader } from "../components/Products/Card";


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
            path: 'main',
            element: <FirstShop />
            },
          {
          path: 'auth',
          element: <Auth />
          },
          {
            path: 'catalog',
            element: <Catalog />
          }, 
          {
              path: 'office', 
              element: <Office />
          }, 
          {
            path: 'catalog/:itemId', 
            element: <Card />,
            loader: getItemByIdLoader
          },
      ],
  },
]);

export default router;

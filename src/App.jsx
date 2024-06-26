// import { Routes, Route } from 'react-router-dom';
// import Main from './routes/Main/Main';
// import ToDoList from './routes/ToDoList/ToDoList';
// import PageNotFound from './routes/PageNotFound/PageNotFound';
// import Form from './routes/Form/Form'
// import Input from './routes/Input/Input';
// import Modal from './routes/Modal/Modal';
// import Products from './routes/Products/Products';
import router from "./router/router";
import { RouterProvider } from "react-router-dom";


function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Main />} />
    //   <Route path='/todo' element={<ToDoList />} />
    //   <Route path='/form' element={<Form />} />
    //   <Route path='/input' element={<Input />} />
    //   <Route path='/modal' element={<Modal />} />
    //   <Route path='/products' element={<Products />} />
    //   <Route path="*" element={<PageNotFound />} />
    // </Routes>
    <>
      {/* <Provider store={store}> */}
        <RouterProvider router={router} />
      {/* </Provider> */}
    </>
  );
}

export default App;

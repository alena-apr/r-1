import { Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import ToDoList from './routes/ToDoList/ToDoList';
import PageNotFound from './routes/PageNotFound/PageNotFound';
import Form from './routes/Form/Form'
import Input from './routes/Input/Input';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='/todo' element={<ToDoList />} />
      <Route path='/form' element={<Form />} />
      <Route path='/input' element={<Input />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App

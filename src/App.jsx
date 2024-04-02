import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './routes/Main/Main'
import ToDoList from './routes/ToDoList/ToDoList'
import PageNotFound from './routes/PageNotFound/PafeNotFound'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='/todo' element={<ToDoList />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App

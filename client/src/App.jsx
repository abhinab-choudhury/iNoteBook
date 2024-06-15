import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import Signin from './components/Signin/Signin'
import Login from './components/Login/Login'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

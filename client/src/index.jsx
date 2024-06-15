import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import Signin from './components/Signin/Signup'
import Login from './components/Login/Login'

export default function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route index element={<Home />} />
            <Route Path='signin' element={<Signin />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<p>Path not resolved</p>} />
          </Route>
        </Routes>
      </BrowserRouter >
    </div>
  )
}



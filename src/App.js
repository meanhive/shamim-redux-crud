import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Create from './component/Create'
import Home from './component/Home'
import Menu from './component/Menu'
import Pnf from './component/Pnf'
import Update from './component/Update'


function App() {
  return (
      <Router>
          <Menu/>
          <ToastContainer autoClose={4000} position={"top-right"} />
          <Routes>
                <Route path={`/`} element={<Home/>} />
                <Route path={`/create`} element={<Create/>} />
                <Route path={`/edit/:id`} element={<Update/>} />
                <Route path={`/*`} element={<Pnf/>} />
          </Routes>
      </Router>
  )
}

export default App
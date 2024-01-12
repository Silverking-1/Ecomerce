import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import store from './store/Store'
import Home from './Home'
import Cart from './Cart'
import Navbar from './Navbar'
export default function App() {
  return (
    <div>
        <div className="anim">
    <h2 >Welcome</h2>
  </div>
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Navbar() {
  const items=useSelector((state)=>state.cart)
  
  return (
<div>
    <div className="main-div">
    <div className="logo">
<h1>E-cart</h1> 
       </div>

        <div className="nav-link">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <span>Cart item:{items.length}</span>
    </div>
    </div>
</div>  )
}

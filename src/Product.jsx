import React, { useEffect, useState } from 'react'
import { add } from './store/CartSlice'
import { useDispatch } from 'react-redux'
export default function Product() {
    const dispatch=useDispatch()
    const [product ,setproduct]=useState([])
    useEffect(()=>{
      const fetchproduct=  async ()=>{
const res= await fetch('https://fakestoreapi.com/products')
const data=await res.json()
setproduct(data)

console.log(data)}
fetchproduct()
    },[])
    
 const handleAdd = (product) => {
    dispatch(add(product));
  };
      
  return (
        <div className="container">
            <h1 style={{fontSize:"70px", fontWeight:'300', textAlign:'center'}}>Welcome to E-cart</h1 >

            <h1 style={{fontSize:"30px", fontWeight:'500'}}>Product</h1 >

    <div className='productsWrapper'>
        {product.map((product)=>(
<div className="card" key={product.id}>
<img src={product.image} alt=""  />
<h4>{product.title}</h4>
<h4>{product.price}$</h4>
<button className='btn' onClick={() => handleAdd(product)}>Add to Cart</button>

</div>
        )
        )}
    </div>
    </div>
  )
}

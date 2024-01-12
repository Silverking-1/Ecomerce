import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from './store/CartSlice';

export default function Cart() {
  const dispatch=useDispatch()
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h4>{product.price}$</h4>
            <button className='btn' onClick={() => handleRemove(product.id)}>Remove from Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

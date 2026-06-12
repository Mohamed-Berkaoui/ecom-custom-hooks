import React from 'react'
import useCart from '../hooks/useCart'

function CartItem({item}) {
    const {incProductQty,decProductQty,removeFromCart}=useCart()
  return (
    <div className='cart-item'>
      <img src={item.image} alt={item.title} />
      <h5>{item.title}</h5>
      <div>
        <h6>{item.qty}</h6>
        <button title="Increase quantity" onClick={()=>incProductQty(item)}>+</button>
        <button title="Decrease quantity" onClick={()=>decProductQty(item)}>-</button>
        <button title="Remove from cart" onClick={()=>removeFromCart(item)}>delete</button>
      </div>
    </div>
  )
}

export default CartItem
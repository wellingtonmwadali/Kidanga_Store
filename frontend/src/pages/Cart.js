import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const productCartItem = useSelector((state)=>state.product.cartItem)
  console.log(productCartItem)
  return (
    <div>
        <h2 className='text-lg md:text-2xl font-bold p-2 text-slate-500'>Your Cart Products</h2>
        <div className=''></div>
    <div className=''></div>
    </div>
    
  )
}

export default Cart
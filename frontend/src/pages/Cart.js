import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct'

//page for the cart products page 
  const Cart = () => {
  const productCartItem = useSelector((state)=>state.product.cartItem)
  console.log(productCartItem)
  return (
    <div>
        <h2 className='text-lg md:text-2xl font-bold p-2 text-slate-500'>Your Cart Products</h2>
        <div className=''></div>
        {/**display cart products*/}
    <div className='w-full max-w-2xl my-4 rounded '>
      {
        productCartItem.map(el=>{
          return(
            <CartProduct
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
              qty= {el.qty}
              total={el.total}/>
          )
        })
      }
    </div>
    </div>
    
  )
}

export default Cart
import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";
import emptyCart from "../assets/empty.gif"
import {loadStripe} from "@stripe/stripe-js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//This contains the file for the cart products page
const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);
  const totalPrice = productCartItem.reduce((acc, curr)=>acc + parseInt(curr.total),0)
  const totalQty = productCartItem.reduce((acc, curr)=>acc + parseInt(curr.qty),0)
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  
  //handle payment using stripe
    const handlePayment = async()=>{
      if(user.email){
    const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/payment`,
    {
      method : "POST",
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(productCartItem)
    })
    if (res.statusCode === 500) return;
    const data = await res.json()
    //console.log(data)
    toast("Redirect to payment Gateway...!")
    stripePromise.redirectToCheckout({sessionId : data})
  }
  else{
    toast("You have not Login!")
    setTimeout(()=>{
      navigate("/login")
    },1000)
  }
  }

  return (
    <div>
      <h2 className="text-lg md:text-3xl font-bold p-2 text-slate-500 flex justify-center">
        Cart Products
      </h2>
      {productCartItem[0] ?
      <div className="md:flex gap-5">
      {/**display cart products*/}
      <div className="w-full max-w-2xl my-4 rounded ">
        {productCartItem.map((el) => {
          return (
            <CartProduct
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
              qty={el.qty}
              total={el.total}
            />
          );
        })}
      </div>
      {/**cart summary */}
      <div className="my-2 p-2 ml-auto w-full max-w-md">
        <h2 className="flex justify-center text-xl text-orange-500 font-bold bg-white ">Cart Summary</h2>
        <div className="text-lg px-2 mt-3 flex border-b ">
          <p >Total Qty:</p>
          <p className="ml-auto font-bold w-28">{totalQty}</p>
        </div>
        <div className="text-lg px-2 mt-3 flex border-b">
          <p>Total Price:</p>
          <p className="ml-auto font-bold w-28">{totalPrice}<span className="text-red-500">$</span></p>
        </div>
        <div className="flex justify-center">
        <button className="bg-yellow-300 hover:bg-orange-600 text-white font-bold py-1 px-2 mt-2 w-48" onClick={handlePayment}>
          Payment
        </button>
        </div>
      </div>
      </div>
 :
<>
 <div className="flex justify-center items-center">
  <img src={emptyCart} alt= "" className="w-full max-w-sm"/>
 </div>
</>
}

    </div>
  );
};

export default Cart;

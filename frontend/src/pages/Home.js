// import React, { useEffect, useRef, useState } from "react";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";
import CardFeature from "../component/CardFeature";
import {FcNext, FcPrevious} from "react-icons/fc"
import Allproduct from "../component/Allproduct";

//This is the homepage

const Home = () => {
  //retrieve products from redux store
  const productData = useSelector((state) => state.product.productList);

  const homeProductCartList = productData.slice(0, 4);//no of products to be displayed
  const homeProductCartListVegetables = productData.filter((el)=>el.category === "vegetables",[])
  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(5).fill(null)
  //next / previous 
  const slideProductRef = useRef()
  const nextProduct =()=>{
    slideProductRef.current.scrollLeft += 200;
  }
  const preveProduct =()=>{
    slideProductRef.current.scrollLeft -= 200;
  }
  
//products filter
  
  //front end application
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
                alt=""
            ></img>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            Fastest Delivery Store in{" "}
            <span className="text-red-500">Thika Area</span>
          </h2>
          <p className="py-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="bg-red-400 text-slate-100 font-bold px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-4  p-4 justify-center">
          {
            //mapping products retrieved from database
            //loading props
          homeProductCartList[0] ?
            homeProductCartList.map((el)=>{
              return(
               <HomeCard
               key={el._id}
               id={el._id}
               image={el.image}
               name={el.name}
               price={el.price}
               category={el.category}/>
              )
            })
            :
            loadingArray.map((el, index)=>{
              return(
                <HomeCard key={index + "loading"}loading={"Loading..."} />
              )
            })
            }
        </div>
      </div>
      <div className="">
     <div className="w-full flex items-center">
     <h2 className="font-bold text-2xl text-slate-700 mb-4">Fresh Vegetables</h2>
     <div className="ml-auto flex gap-3">
      <button onClick= {preveProduct} className="bg-slate-300 hover:bg-slate-400  text-lg p-1 rounded">
        <FcPrevious/>
      </button>
      <button onClick={nextProduct} className="bg-slate-300 hover:bg-slate-400  text-lg p-1 rounded">
        <FcNext/>
      </button>
     </div>
     </div>
        <div className="flex gap-4 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
          {
           homeProductCartListVegetables[0] ? homeProductCartListVegetables.map((el,)=>{
            return(
              <CardFeature
              key={el._id}
              id={el._id}
              name={el.name}
              category={el.category}
              price={el.price}
              image={el.image}
              />
            )
          })
          :
          loadingArrayFeature.map((el, index)=><CardFeature loading = "Loading..."key={index}/>)
        }
          </div>
      </div>
      {/**other products */}
      <Allproduct heading={"Your Product"}/>
    </div>
  );
};

export default Home;

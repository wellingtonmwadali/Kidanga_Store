import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux';


//This file consists of the all products
const Allproduct = ({heading}) => {
    const productData = useSelector((state) => state.product.productList);
    //categories for other products
  const categoryList = [...new Set(productData.map(el=>el.category))]
  const [filterby, setFilterBy] = useState("")
  const [dataFilter, setDataFilter] = useState([])
  useEffect(()=>{
   setDataFilter(productData)
  },[productData])
  const  handleFilterProduct = (category) =>{
    setFilterBy(category)
   const filter = productData.filter(el => el.category.toLowerCase()=== category.toLowerCase())
   setDataFilter(()=>{ 
   return[
     ...filter
   ]
 })
 }
 const loadingArrayFeature = new Array(5).fill(null)

  return (
         <div className="my-4">
      <h2 className="font-bold text-2xl text-slate-700 mb-4">{heading}</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {
          categoryList[0] ? categoryList.map(el=>{
            return( 
            <FilterProduct 
            category={el} onClick={()=> handleFilterProduct(el)} 
            key={el}
            isActive= {el.toLowerCase() === filterby.toLowerCase()}
            />)})
            : (
            <div className="min-h-[110px] flex justify-center items-center">
            <p>loading...</p>
          </div>)
        }
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {
            dataFilter[0] ? dataFilter.map(el=>{
              return(
                 <CardFeature
              key={el._id}
              id={el._id}
              name={el.name}
              category={el.category}
              price={el.price}
              image={el.image}/>
              )
            })
            :
              loadingArrayFeature.map((el, index)=><CardFeature loading = "Loading..." key={index}/>)
          }
      </div>
      </div>
  )
}

export default Allproduct
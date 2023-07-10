import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux';

const Allproduct = () => {
    const productData = useSelector((state) => state.product.productList);
    //categories for other products
  const categoryList = [...new Set(productData.map(el=>el.category))]
  const [filterby, setFilterBy] = useState("")
  const [dataFilter, setDataFilter] = useState([])
  useEffect(()=>{
   setDataFilter(productData)
  },[productData])
  const  handleFilterProduct = (category) =>{
   const filter = productData.filter(el => el.category.toLowerCase()=== category.toLowerCase())
   setDataFilter(()=>{ 
   return[
     ...filter
   ]
 })
 }

  return (
         <div className="my-4">
      <h2 className="font-bold text-2xl text-slate-700 mb-4">Your Product</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {
          categoryList[0] && categoryList.map(el=>{
            return( <FilterProduct category={el} onClick={()=> handleFilterProduct(el)}/>)})
        }
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {
            dataFilter.map(el=>{
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
          }
      </div>
      </div>
  )
}

export default Allproduct
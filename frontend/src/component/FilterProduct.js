import React from 'react'
import {CiForkAndKnife} from "react-icons/ci"
//filter categories
const FilterProduct = ({category, onClick}) => {
  return (
 <div onClick={onClick}>
 <div className="text-3xl bg-yellow-500 rounded-full p-4 cursor-pointer"><CiForkAndKnife/></div>
 <p className='text-center font-medium capitalize my-1'>{category}</p>
 </div>
  )
}

export default FilterProduct
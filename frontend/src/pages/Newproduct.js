import React from 'react'
import {BsUpload} from 'react-icons/bs'

const Newproduct = () => {
  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'>
      <label htmlFor ='name'>Name </label>
      <input type={"text"} name="name" className='bg-slate-200 p-1 '></input>

       <label htmlFor='category'>Category</label>
      <select className='bg-slate-200 p-1 my-1' id = 'category'>
        <option>Fruits</option>
        <option>Vegetables</option>
        <option>Icecream</option>
        <option>Desa</option>
        <option>pizza</option>
      </select>

      <label htmlFor='image'>Image</label>
      <div id='image' className='h-40 w-full bg-slate-200 rounded flex items-center justify-center '>
      <span className= 'text-3xl'><BsUpload/></span>
      </div>
      <label htmlFor='price' className='my-1'>Price</label>
      <input type={"text"} className='bg-slate-200 p-1 my-1'/>
      <label htmlFor='description'>Description</label>
      <textarea rows={2} className='bg-slate-200 p-1 my-1 resize-none'></textarea>
      
      <button className='bg-red-400 hover:bg-red-500 text-white text-lg-medium my-1 font-bold drop-shadow'>Save</button>
      </form>
    </div>
  )
}

export default Newproduct

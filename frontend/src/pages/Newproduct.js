import React, { useState } from 'react'
import {BsUpload} from 'react-icons/bs';
import { imagetoBase64 } from '../utility/imagetoBase64';


const Newproduct = () => {
  const [data, setData] =useState({
    name : "",
    category : "",
    image : "",
    price : "",
    description : "",
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target
    
    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const uploadImage = async(e) => {
    console.log(e.files)
    const data = await imagetoBase64(e.target.files[0])
    //console.log(data)
    setData((preve)=>{
      return{
       ...preve,
       image : data
      }
    }
  )}
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }


  return (
    //new product form
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'onSubmit={handleSubmit}>
      <label htmlFor ='name'>Name </label>
      <input type={"text"} name="name" className='bg-slate-200 p-1 'onChange={handleOnChange}></input>

       <label htmlFor='category'>Category</label>
      <select className='bg-slate-200 p-1 my-1' id = 'category' name = 'category' onChange={handleOnChange}>
        <option>Fruits</option>
        <option>Vegetables</option>
        <option>Icecream</option>
        <option>Desa</option>
        <option>pizza</option>
      </select>

      <label htmlFor='image'>Image
      <div  className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
      
      {
        data.image ? <img src = {data.image} className='h-full '/> :  <span className= 'text-3xl'><BsUpload/></span>
      }
     
      <input type = {"file"} accept = "image/" id = "image" onChange = {uploadImage} className='hidden'/>
       </div>
      </label>
      <label htmlFor='price' className='my-1'>Price</label>
      <input type={"text"} className='bg-slate-200 p-1 my-1 'name='price' onChange={handleOnChange}/>
      <label htmlFor='description'>Description</label>
      <textarea rows={2} className='bg-slate-200 p-1 my-1 resize-none'name= 'description' onChange={handleOnChange}></textarea>
      
      <button className='bg-red-400 hover:bg-red-500 text-white text-lg-medium my-1 font-bold drop-shadow'>Save</button>
      </form>
    </div>
  )
}

export default Newproduct

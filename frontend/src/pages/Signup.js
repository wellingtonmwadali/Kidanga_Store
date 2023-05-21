import React, {useState} from 'react'
import loginAnimation from '../assets/login-animation.gif'
import {BiShow,BiHide} from 'react-icons/bi';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(preve => !preve)
  }
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(preve => !preve)
  }
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        {/*<h1 className='text-center text-2xl'>Signup</h1>*/}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          {/*animated signup gif in form*/}
          <img src={loginAnimation} className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-red-300"
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type={"text"}
            id="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-red-300"
          />
          <label htmlFor='email'>Email</label>
          <input
          type={"email"} id='email'
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-red-300"
          />
          <label htmlFor='password'>Password</label>
          <div className='flex px-2 py-1 rounded bg-slate-200 mt-1 mb-2 focus-within:outline focus-within:outline-red-300'>
          <input
          type={showPassword ? "text" : "password"}
          id='password'
          name='password '
          className=" w-full bg-slate-200 border-none outline-none"/>
          <span className='flex cursor-pointer 'onClick = {handleShowPassword}>{showPassword ? <BiShow/> : <BiHide/>}</span>
          </div>
          <label  htmlFor='confirmPassword'>Confirm Password</label>
          <div className='flex px-2 py-1 rounded bg-slate-200 mt-1 mb-2 focus-within:outline focus-within:outline-red-300'>
          <input
          type={showConfirmPassword  ? "text" : "password"}
          id='confirmPassword'
          name='confirmPassword '
          className=" w-full bg-slate-200 border-none outline-none"/>
          <span className='flex cursor-pointer 'onClick = {handleShowConfirmPassword }>{showPassword ? <BiShow/> : <BiHide/>}</span>
          </div>
          <button className='w-full max-w-[150px] m-auto bg-red-400 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full'>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup
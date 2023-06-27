import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {FaRegUser} from 'react-icons/fa';
import {BsCart4} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import { toast } from 'react-hot-toast';


const Header = () => {
  const [showMenu, setShowMenu] =  useState(false);
  const userData = useSelector((state)=>state.user)
  console.log(userData)

  const dispatch = useDispatch()
  const handleShowMenu = () => {
    setShowMenu( preve => !preve)
  }
  const handleLogout = () => {
    dispatch(logoutRedux())
    toast("logging out")

  }
  console.log(process.env.REACT_APP_ADMIN_EMAI)
  return (
    /*logo*/
    <header className="fixed shadow-md w-full h-14 px-2 md:px-4 bg-white">
      {/*for desktop view */}
      <div className="flex items-center justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" />
          </div>
        </Link>
        {/*icons*/}
        <div className="flex items-center gap-3 md:gap-6">
          <nav className="flex gap-3 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl relative">
            <BsCart4 />
            {/*orders*/}
            <div className="absolute -top-2 -right-1 text-white bg-red-600 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className="text-slate-600 "onClick = {handleShowMenu}>
            <div className=" text-2xl p-1 cursor-pointer h-8 w-8 overflow-hidden drop-shadow-md  ">
             {userData.image ? (<img src={userData.image} className="h-full w-full" />) : (<FaRegUser />)}
            </div>
            {showMenu && (
              <div className="absolute right-2 py-2 px-2  bg-white shadow drop-shadow-md flex flex-col">
               <Link to={"newproduct"}className="whitespace-nowrap cursor-pointer">New Product</Link>
                {
                userData.image ? <p className = "cursor-pointer"onClick={handleLogout}>Logout</p> : <Link to={"login"}className="whitespace-nowrap cursor-pointer">Login</Link>
                }
                </div>
            )}
          </div>
        </div>
      </div>
      {/*for mobile view*/}
    </header>
  );
}

export default Header

import React, { useState } from "react";
import loginAnimation from "../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { imagetoBase64 } from "../utility/imagetoBase64";
import { toast } from "react-hot-toast";

// This file deals with the sign up form -> must include image
const Signup = () => {
  //handle show password
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  //signup data
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  console.log(data);
  //handle confirm password to be visible
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  {
    /**handle uploading profile pic */
  }
  const handleUploadProfilePhoto = async (e) => {
    const data = await imagetoBase64(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  {
    /**handle submit for signup to check for eligibility
     **check also if password is same to confirm password
     **fetch api
     */
  }
  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = data;
    if (firstName && lastName && email && password && confirmPassword)
      if (password === confirmPassword) {
        //callback function for fetch
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const dataRes = await fetchData.json();
        console.log(dataRes);
        //alert(dataRes.message)
        toast(dataRes.message);
        //navigate to login after signup
        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        alert("password and confirm password not equal");
      }
    else {
      alert("please enter the required fields");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        {/*<h1 className='text-center text-2xl'>Signup</h1>*/}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative ">
          {/*animated signup gif in form*/}
          <img
            src={data.image ? data.image : loginAnimation}
            className="w-full h-full"
          />
          {/* upload profile pic */}
          <label htmlFor="profilePhoto">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-25 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">upload</p>
            </div>
            <input
              type={"file"}
              id="profilePhoto"
              className="hidden"
              onChange={handleUploadProfilePhoto}
            />
          </label>
        </div>
        {/**input form */}
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-red-300"
            value={data.firstName}
            onChange={handleOnChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-red-300"
            value={data.lastName}
            onChange={handleOnChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-red-300"
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 rounded bg-slate-200 mt-1 mb-2 focus-within:outline focus-within:outline-red-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            {/**hide and show react icons */}
            <span className="flex cursor-pointer " onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex px-2 py-1 rounded bg-slate-200 mt-1 mb-2 focus-within:outline focus-within:outline-red-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className=" w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex cursor-pointer "
              onClick={handleShowConfirmPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full">
            Signup
          </button>
        </form>
        {/**link  to login page */}
        <p className="text-sm mt-1">
          Already have account?
          <Link to={"/login"} className="font-medium text-red-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

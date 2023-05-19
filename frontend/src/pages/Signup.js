import React from 'react'
import loginAnimation from '../assets/login-animation.gif'

const Signup = () => {
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto'>
            {/*<h1 className='text-center text-2xl'>Signup</h1>*/}
            <div className=''>
              <img src={loginAnimation} className=''/>
            </div>
        </div>
    </div>
  )
}

export default Signup
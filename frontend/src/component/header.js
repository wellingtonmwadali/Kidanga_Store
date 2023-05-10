import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    /*logo*/
    <header className='fixed shadow-md w-full h-12 px-2 md:px-4'>
      {/*for desktop view */}
      <div className='flex items-center'>
        <div className='h-12'>
          <img src={logo} className = 'h-full'/>
        </div>
      </div>
      {/*for mobile view*/}
    </header>
  )
}

export default Header;

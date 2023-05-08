import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className=''>
      {/*for desktop view */}
      <div className=''>
        <div className=''>
          <img src={logo}/>
        </div>
      </div>
      {/*for mobile view*/}
    </header>
  )
}

export default Header;

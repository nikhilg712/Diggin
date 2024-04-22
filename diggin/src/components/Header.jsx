import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-950 h-14 text-white text-3xl' >
      <div className='w-40 h-12 rounded-md mt-1 ml-1 absolute bg-[#004cff]'>
        <Link to='/'>
        <p className='font-bold pt-[4px] pl-4'>Diggin🔎</p>
        </Link>
      
      </div>
      
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import Search from "./Search";

const Header = () => {
  return (
    <div className='bg-gray-950 h-14 text-white text-3xl ' >
      <div className=' h-12 flex mt-2 ml-1 absolute justify-between gap-10  '>
        <Link to='/'>
        <p className='font-bold ml-2 rounded-md bg-[#004cff]'>Diggin🔎</p>
        </Link>
        <Search/>
      </div>

    </div>
  )
}

export default Header

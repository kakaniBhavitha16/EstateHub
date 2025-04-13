// import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="  flex items-center flex-wrap bg-gray-200  ">
  <img src="./logo.png" alt="logo" className="h-10 w-10 object-contain" />
  <Link to='/'>
  <h1 className="text-xl ml-1">
    <span className="text-blue-900 font-semibold">Estate</span>
    <span className="text-teal-600 font-semibold">Hub</span>
  </h1>
  </Link>
  <form className="ml-auto flex items-center bg-white rounded-md border-2 border-gray-500 px-2 ">
    <input
      type="text"
      placeholder="Search..."
      className=" text-xl bg-transparent flex-grow outline-none "
    />
    <FaSearch className='text-gray-500 ' />
  </form>
  <ul className='flex gap-4 ml-4'>
    <Link to='/'>
    <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
    </Link>
    <Link to='/about'>
    <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li>
    </Link>
    <Link to='/sign-in'>
    <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Sign In</li>
    </Link>
  </ul>
</header>

  )
}

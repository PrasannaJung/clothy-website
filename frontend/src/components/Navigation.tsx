import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);

  function navToggle() {
    setNavOpen(prev => !prev);
  }

  return (
    <header className='container flex justify-between py-2 items-center'>
      <h1 className='text-5xl font-bubble'>
        <NavLink to='/home'>clothy.</NavLink>
      </h1>
      <nav className='hidden md:flex'>
        <ul className='flex items-center gap-4 text-xl'>
          <li className='cursor-pointer'>
            <NavLink to='/products/all'> All Products</NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to='/products/men'> Men </NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to='/products/women'>Women</NavLink>
          </li>
          <li className='cursor-pointer'>Sale</li>
        </ul>
      </nav>
      <nav
        className={`flex justify-center items-center md:hidden fixed inset-0 bg-orange-100 z-10  ${
          navOpen ? "translate-y-0" : "-translate-y-full"
        } duration-300 ease-in`}
      >
        <ul className='flex flex-col items-center gap-4 text-2xl'>
          <li className='cursor-pointer'>
            <NavLink to='/products/all'> All Products</NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to='/products/men'> Men </NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to='/products/women'>Women</NavLink>
          </li>
          <li className='cursor-pointer'>Sale</li>
        </ul>
      </nav>

      <div className='flex items-center gap-2'>
        <div className='mr-4'>
          <button className='bg-black text-white px-2 py-1 rounded-lg'>
            <Link to='/login'>LOGIN</Link>
          </button>
        </div>
        <div className='md:hidden'>
          <button className='md:hidden' onClick={navToggle}>
            {navOpen ? (
              <AiOutlineClose
                size={24}
                className='cursor-pointer fixed top-5 right-5 z-20 text-black'
              />
            ) : (
              <AiOutlineMenu
                size={24}
                className='cursor-pointer absolute top-5 right-5 z-20'
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;

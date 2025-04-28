import  {memo, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { ImLeaf } from "react-icons/im";
import { IoBagHandle } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import {labels} from "../Routes/MainRoutes";
import useDarkMode from '../hooks/useDarkMode';


const Header = memo(() =>{
  const [openNav, setOpenNav] = useState(false);
  const [isDarkMode, toggleDarkTheme] = useDarkMode();


  const handleOpen = (e) => {
    e.preventDefault();
    setOpenNav((prev) => !prev);
  }
  const handleOut = () => {
    setOpenNav(false);
  }


  return (
    <header className='sticky z-[10000000] w-full  h-20 mx-auto my-0 flex items-center justify-between px-4 md:px-0 '>

      <NavLink to="/" className='flex items-center gap-2 text-2xl '>
        <ImLeaf className='text-bold text-[var(--primary)] text-[12px] md:text-[24px]'  data-discover="true" aria-label="Logo"/>
        <h1 className='uppercase text-[12px] md:text-[20px] font-lobster tracking-[4px]'>Amlou Ino</h1>
      </NavLink>

      <nav className={`navLinks ${openNav ? "open" : ""} `}>
        <ul className="w-full flex flex-col items-center gap-10 md:static md:flex-row  ">
          {
            labels.map((link, index) => {
              const { to, label, ariaLabel } = link;
              return (
                <li  key={index}>
                  <NavLink to={to} onClick={handleOut} className={({ isActive }) =>
                    isActive ? "text-[1em] font-normal uppercase text-[var(--primary)] " : "text-[1em] font-normal uppercase  text-[var(--colorBlack)]"
                  }  aria-label={ariaLabel}>
                    {label}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>

      <div className='flex items-center  gap-6  p-2'>
        {!isDarkMode ? (<FaMoon className='text-[1.15rem] cursor-pointer hover:text-[var(--primary)] transition-colors duration-500' onClick={toggleDarkTheme} />) : (<IoIosSunny className='text-[1.15rem] cursor-pointer hover:text-[var(--primary)] transition-colors duration-500'  onClick={toggleDarkTheme} />)}
        <NavLink to="/login" data-discover="true" aria-label="Login page">
          <RiAccountCircleFill className='text-[1.25rem] cursor-pointer hover:text-[var(--primary)] transition-colors duration-500' />
        </NavLink>
        <div className='relative'>  
        <span className='flex items-center justify-center absolute text-white  text-[12px]  -top-2 -right-4 w-5 h-5 bg-red-700 rounded-full'>0</span>
        <IoBagHandle className='text-[1.25rem] cursor-pointer hover:text-[var(--primary)] transition-colors duration-500' />
        </div>
        {!openNav ? (<CgMenuRightAlt className='block md:hidden  text-[1.5rem] cursor-pointer hover:text-[var(--primary)] transition-colors duration-500' onClick={handleOpen} />) : <IoClose className='block md:hidden  text-[1.5rem] cursor-pointer hover:text-[var(--primary)] transition-colors duration-500' onClick={handleOpen} />}
      </div>

    </header>

  )
})

export default Header;
import React, { useState } from 'react'
import { RxCaretDown } from 'react-icons/rx'
import { IoSearchSharp } from "react-icons/io5";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaHireAHelper } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true)
  }
  const hideSideMenu = () => {
    setToggle(false)
  }
  const links = [
    {
      icon: <IoSearchSharp />,
      name: "Search"
    },
    {
      icon: <RiDiscountPercentFill />,
      name: "Offer",
      sup:"new"
    },
    {
      icon: <FaHireAHelper />,
      name: "Help"
    },
    
    {
      icon:<SiAdobeindesign />,
      name: "Sign In"
    },
    {
      icon:<FaShoppingCart/>,
      name: "Cart",
      sup:0
    },
  ]

  return (
    <> 
      <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu}  style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ?  'visible' : 'hidden',
        }}>
        <div onClick={(e) => {
          e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
        style={{
          left: toggle ? '0%': '-100%'

        }}
        ></div>
      </div>
        
        
        <header className='p-[15px] shadow-xl'>
          <div className='max-w-[1200] cursor-pointer max-auto border border-red-500 flex items-center'>
            <div className='w-10 border border-blue-500'>
                <img src='logo.png' className='w-full' alt='' />
            </div> 
            
            <div className=''>
              <span className='font-bold border-b-[3px] border-[black]'>Richmond</span>Houston,
              Richmond, United States <RxCaretDown fontSize={25} className='inline text-[#fc8019]
              cursor-pointer' onClick={showSideMenu} />
            </div>

            <div>
              <nav className='flex list-none gap-20 ml-[350px] font-bold text-[18px]'>
               {
                links.map(
                  (links, index) => {
                    return <li key={index} className='flex  hover:text-[#fc8019] items-center gap-2'>
                      {links.icon}
                      {links.name}
                    </li>
                  }
                )
               }
              </nav>

            </div>
          </div>
        </header>
    </>
  )
}

export default Header

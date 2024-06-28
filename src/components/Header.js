import React, { useState } from 'react'
import { RxCaretDown } from 'react-icons/rx'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true)
  }

  return (
    <> 
      <div className="black-overlay w-full h-full fixed duration-500" style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ?  'visible' : 'hidden',
        }}>
        <div className='w-[500px] bg-white h-full absolute duration-[400ms]'
        style={{
          left: toggle ? '0%': '-100%'

        }}
        ></div>
      </div>
        
        
        <header className='p-[15px] shadow-xl'>
          <div className='max-w-[1200] max-auto border border-red-500 flex items-center'>
            <div className='w-10 border border-blue-500'>
                <img src='logo.png' className='w-full' alt='' />
            </div>
            
            <div className=''>
              <span className='font-bold border-b-[3px] border-[black]'>Richmond</span>Houston,
              Richmond, United States <RxCaretDown fontSize={25} className='inline text-[#fc8019]
              cursor-pointer' onClick={showSideMenu} />
            </div>
          </div>
        </header>
    </>
  )
}

export default Header

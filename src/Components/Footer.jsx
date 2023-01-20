import React from 'react'

function Footer({theme}) {
  return (
    <div className='w-full max-w-[1190px] m-auto  py-7 lg:px-5 px-10 flex justify-center items-center'>
       
        <p className={`md:text-base text-sm text-center  ${theme ? 'text-gray':'text-black-mode'}`}>©2022 Made by MJ Cariso | All Right Reserved</p>
        
    </div>
  )
}

export default Footer
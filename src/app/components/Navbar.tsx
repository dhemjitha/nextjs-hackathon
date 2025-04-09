import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.svg"

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full px-24  py-5 z-50 backdrop-blur-lg bg-white/5 flex items-center justify-between'>
        <Image src={logo} width={30} height={50} alt='logo'/>
        <button className='btn btn-primary'>
            Login
        </button>
    </div>
  )
}

export default Navbar
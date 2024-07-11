"use client"

import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className=''>
        <nav>
            <div className='flex flex-col '>
               <Image src={logo} alt='' width={60} height={60} />
               <div>
                <h2>Ujjwal</h2>
                <p>Your Money</p>
               </div>
               <div>
                
               </div>

            </div>
        </nav>
      
    </div>
  )
}

export default Sidebar

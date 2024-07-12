"use client"

import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarItems } from '@/data'

const Sidebar = () => {
  return (
    <div className='flex flex-row'>
        <nav>
            <div className='flex flex-col  divide-x'>
               <Image src={logo} alt='' width={60} height={60} />
               <div className=''> 
                <h2 className=''>Ujjwal</h2>
                <p>Your Money</p>
               </div>
               <hr></hr>
               <div className="ml-4 flex flex-col gap-y-4 text-sm text-muted-foreground">
                {sidebarItems.map((items,index)=>(
                  <Link 
                  href={items.href}
                  key={index}>
                    {items.lable}
                  </Link>
                ))}

                
               </div>

            </div>
        </nav>
      
    </div>
  )
}

export default Sidebar

"use client"

import React from 'react'


import Link from 'next/link'
import { sidebarItems } from '@/data'

const Sidebar = () => {
  return (
    <div className=' h-full '>
        <nav>
            <div className='flex flex-col divide-x h-full'>
             
               
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

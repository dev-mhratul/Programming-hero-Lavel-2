import Link from 'next/link'
import React from 'react'

function practice(
  {
    children,
    marketingSlot,
    salesSlot
  }
  :
  {
    children:React.ReactNode,
    marketingSlot:React.ReactNode,
    salesSlot:React.ReactNode,

  }
) {
  return (
    <div>
      <nav className='flex justify-around m-10 underline underline-offset-4 text-blue-600'>
        <Link href={'/development'}>
            Development
        </Link>
        <Link href={'/marketing'}>
            Marketing
        </Link>
        <Link href={'/marketing/settings'}>
            Settings
        </Link>
        <Link href={'/sales'}>
            Sales
        </Link>

      </nav>

      <div className='flex'>
        {marketingSlot}
        {salesSlot}
      </div>

      {children}
    </div>
  )
}

export default practice
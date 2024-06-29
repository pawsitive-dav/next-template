'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import DarkModeButton from '../Base/DarkModeButton'
import PButton from '../Ui/PButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuList = [
    { name: 'Home', to: '#' },
    { name: 'Way Us', to: '#' },
    { name: 'Features', to: '#' },
    { name: 'Pricing', to: '#' },
  ]

  return (
    <nav
      className={`fixed w-full z-20 ${
        scrolled ? 'bg-white bg-opacity-100 shadow dark:bg-gray-900' : 'bg-white bg-opacity-5'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center h-[60px]'>
        <div>
          <Link href='/' className='text-xl font-bold'>
            LOGO
          </Link>
        </div>
        <div>
          <ul className='flex items-center space-x-10 text-base transition duration-300 ease-in-out'>
            {menuList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.to}
                  className={`${scrolled || 'text-white hover:text-white'} hover:text-primary`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center space-x-2'>
          <DarkModeButton />
          <PButton color='primary'>Sign In</PButton>
        </div>
      </div>
    </nav>
  )
}

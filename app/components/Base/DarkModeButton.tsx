'use client'

import { useState, useEffect } from 'react'
import PIcon from '../Ui/PIcon'

export default function DarkModeButton() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-md bg-gray-700 text-white dark:bg-gray-200 dark:text-black'
    >
      {theme === 'dark' ? <PIcon name='sun' /> : <PIcon name='moon' color='white' />}
    </button>
  )
}

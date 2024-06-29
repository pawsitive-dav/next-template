'use client'

import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { themeAtom } from '@/app/store/themeAtom'
import PIcon from '../Ui/PIcon'

export default function DarkModeButton() {
  const [theme, setTheme] = useAtom(themeAtom)

  useEffect(() => {
    let storedTheme = localStorage.getItem('theme')
    if (!storedTheme) {
      storedTheme = 'light'
      localStorage.setItem('theme', 'light')
    }

    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    setTheme(storedTheme)
  }, [setTheme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
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

import React from 'react'

type PButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg' // กำหนด type ของ prop size
}

export default function PButton({ children, disabled = false, size = 'md' }: PButtonProps) {
  // กำหนดค่า height ตาม size ที่รับเข้ามา
  let heightClass = ''
  switch (size) {
    case 'sm':
      heightClass = 'h-7 px-2 text-xs'
      break
    case 'md':
      heightClass = 'h-9 px-4 text-sm'
      break
    case 'lg':
      heightClass = 'h-11 px-5 text-base'
      break
    default:
      heightClass = 'h-9 px-4 text-sm'
      break
  }

  return (
    <button
      className={`flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white rounded-md ${heightClass} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

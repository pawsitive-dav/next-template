'use client'

import React from 'react'
import PIcon from './PIcon'

type PButtonProps = {
  children?: React.ReactNode
  disabled?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const getSizeClasses = (size: 'sm' | 'md' | 'lg', loading: boolean) => {
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-5 text-subtitle',
  }

  const loadingClasses = {
    sm: loading ? 'pl-2' : '',
    md: loading ? 'pl-3' : '',
    lg: loading ? 'pl-4' : '',
  }

  return {
    sizeClass: sizeClasses[size],
    loadingClass: loadingClasses[size],
  }
}

export default function PButton({
  children,
  disabled = false,
  loading = false,
  size = 'md',
}: PButtonProps) {
  const { sizeClass, loadingClass } = getSizeClasses(size, loading)

  return (
    <button
      className={`flex items-center justify-center rounded-md 
        bg-blue-500 hover:bg-blue-700 text-white transition duration-300 ease-in-out
        ${sizeClass} ${loadingClass} 
        ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
      `}
      disabled={disabled}
    >
      <div className={`${loading ? 'block' : 'hidden'} mr-2`}>
        <PIcon name={'arrow-path'} size={'6'} color={'white'} spin />
      </div>
      {children}
    </button>
  )
}

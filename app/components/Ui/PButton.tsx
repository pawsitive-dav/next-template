'use client'

import React from 'react'
import PIcon from './PIcon'

type PButtonProps = {
  children?: React.ReactNode
  disabled?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'soft' | 'text'
  color?: 'normal' | 'primary' | 'info' | 'success' | 'warning' | 'error' | 'white'
}

const getClasses = (
  variant: 'solid' | 'outline' | 'soft' | 'text',
  size: 'sm' | 'md' | 'lg',
  loading: boolean,
  disabled: boolean,
  color: 'normal' | 'primary' | 'info' | 'success' | 'warning' | 'error' | 'white'
) => {
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-5 text-subtitle',
  }

  const loadingClasses = {
    sm: loading ? 'pl-2 cursor-not-allowed' : '',
    md: loading ? 'pl-3 cursor-not-allowed' : '',
    lg: loading ? 'pl-4 cursor-not-allowed' : '',
  }

  const colorHover = !disabled && !loading ? 'hover:bg-opacity-90 hover:dark:bg-opacity-70' : ''
  const colorClasses = {
    normal:
      variant === 'solid'
        ? `bg-normal text-white dark:bg-gray-50 dark:text-normal ${colorHover}`
        : variant === 'outline'
        ? `bg-normal bg-opacity-0 border-2 border-normal text-normal dark:border-white dark:text-white ${colorHover}`
        : variant === 'soft'
        ? 'bg-normal bg-opacity-10 text-normal'
        : '',
    primary: `bg-primary text-white ${colorHover}`,
    info: `bg-info text-white ${colorHover}`,
    success: `bg-success text-white ${colorHover}`,
    warning: `bg-warning text-white ${colorHover}`,
    error: `bg-error text-white ${colorHover}`,
    white: `bg-white text-normal ${colorHover}`,
  }

  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : ''

  return {
    sizeClass: sizeClasses[size],
    loadingClass: loadingClasses[size],
    colorClass: colorClasses[color],
    disabledClasses: disabledClasses,
  }
}

export default function PButton({
  children,
  variant = 'solid',
  disabled = false,
  loading = false,
  size = 'md',
  color = 'normal',
}: PButtonProps) {
  const { sizeClass, loadingClass, colorClass, disabledClasses } = getClasses(
    variant,
    size,
    loading,
    disabled,
    color
  )
  const mainClass = 'flex items-center justify-center rounded-md'
  const transitionClass = 'transition duration-300 ease-in-out'
  const iconVisibilityClass = loading ? 'block' : 'hidden'

  return (
    <button
      className={`${mainClass} ${transitionClass} ${colorClass} ${sizeClass} ${loadingClass} ${disabledClasses}`}
      disabled={disabled || loading}
    >
      <div className={`${iconVisibilityClass} mr-2`}>
        <PIcon name={'arrow-path'} size={'6'} color={'white'} spin />
      </div>
      <div className='leading-none font-medium'>{children}</div>
    </button>
  )
}

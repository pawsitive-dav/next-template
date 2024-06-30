'use client'

import React, { useState, useEffect } from 'react'
import PIcon from './PIcon'

type PButtonProps = {
  children?: React.ReactNode
  disabled?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'soft' | 'text'
  color?: 'normal' | 'primary' | 'info' | 'success' | 'warning' | 'error'
}

const getClasses = (
  variant: 'solid' | 'outline' | 'soft' | 'text',
  size: 'sm' | 'md' | 'lg',
  loading: boolean,
  disabled: boolean,
  color: 'normal' | 'primary' | 'info' | 'success' | 'warning' | 'error'
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

  const hoverClasses = {
    solid: 'hover:bg-opacity-80 hover:dark:bg-opacity-70',
    outline: `hover:bg-opacity-100 hover:text-white dark:hover:brightness-100 dark:hover:bg-opacity-100 ${
      color === 'normal' ? 'hover:dark:text-normal' : ''
    }`,
    soft: `hover:bg-opacity-100 hover:text-white dark:hover:bg-opacity-100 dark:hover:dark:brightness-100 ${
      color === 'normal' ? 'hover:dark:text-normal' : ''
    }`,
    text: `hover:bg-opacity-10 dark:hover:bg-opacity-10 ${
      color === 'normal' ? 'dark:hover:bg-white' : ''
    }`,
  }

  const colorHover = !disabled && !loading ? hoverClasses[variant] : ''

  const colorVariants = {
    normal: {
      solid: `bg-normal text-white dark:bg-gray-50 dark:text-normal ${colorHover}`,
      outline: `bg-normal bg-opacity-0 ring-1 ring-ofset-0 ring-normal text-normal dark:bg-white dark:bg-opacity-0 dark:ring-white dark:text-white ${colorHover}`,
      soft: `bg-normal bg-opacity-5 text-normal dark:text-white dark:bg-white dark:bg-opacity-10 ${colorHover}`,
      text: `bg-normal bg-opacity-0 text-normal dark:text-white ${colorHover}`,
    },
    primary: {
      solid: `bg-primary text-white ${colorHover}`,
      outline: `bg-primary bg-opacity-0 ring-1 ring-ofset-0 ring-primary text-primary dark:brightness-150 ${colorHover}`,
      soft: `bg-primary bg-opacity-5 text-primary dark:bg-opacity-10 dark:brightness-150 ${colorHover}`,
      text: `bg-primary bg-opacity-0 text-primary dark:brightness-150 ${colorHover}`,
    },
    info: {
      solid: `bg-info text-white ${colorHover}`,
      outline: `bg-info bg-opacity-0 ring-1 ring-ofset-0 ring-info text-info ${colorHover}`,
      soft: `bg-info bg-opacity-5 text-info ${colorHover}`,
      text: `bg-info bg-opacity-0 text-info ${colorHover}`,
    },
    success: {
      solid: `bg-success text-white ${colorHover}`,
      outline: `bg-success bg-opacity-0 ring-1 ring-ofset-0 ring-success text-success ${colorHover}`,
      soft: `bg-success bg-opacity-5 text-success ${colorHover}`,
      text: `bg-success bg-opacity-0 text-success ${colorHover}`,
    },
    warning: {
      solid: `bg-warning text-white ${colorHover}`,
      outline: `bg-warning bg-opacity-0 ring-1 ring-ofset-0 ring-warning text-warning ${colorHover}`,
      soft: `bg-warning bg-opacity-5 text-warning ${colorHover}`,
      text: `bg-warning bg-opacity-0 text-warning ${colorHover}`,
    },
    error: {
      solid: `bg-error text-white ${colorHover}`,
      outline: `bg-error bg-opacity-0 ring-1 ring-ofset-0 ring-error text-error ${colorHover}`,
      soft: `bg-error bg-opacity-5 text-error ${colorHover}`,
      text: `bg-error bg-opacity-0 text-error ${colorHover}`,
    },
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return {
    sizeClass: sizeClasses[size],
    loadingClass: loadingClasses[size],
    colorClass: colorVariants[color][variant],
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
  const transitionClass = 'transition duration-200'
  const iconVisibilityClass = loading ? 'block' : 'hidden'
  const iconColor = variant !== 'solid' ? color : 'white'

  return (
    <button
      className={`${mainClass} ${transitionClass} ${colorClass} ${sizeClass} ${loadingClass} ${disabledClasses}`}
      disabled={disabled || loading}
    >
      <div className={`${iconVisibilityClass} mr-2`}>
        <PIcon name={'arrow-path'} size={'6'} color={iconColor} spin />
      </div>
      <div className='leading-none font-medium'>{children}</div>
    </button>
  )
}

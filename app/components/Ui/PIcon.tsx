'use client'

import * as React from 'react'
import * as Icons from '@heroicons/react/24/outline'

type IconType = {
  [key: string]: React.ComponentType<React.ComponentProps<'svg'>>
}

type SizeType = '4' | '5' | '6' | '8' | '10' | '12' | '16' | '20' | '24'
type ColorsType = 'normal' | 'primary' | 'info' | 'success' | 'warning' | 'error' | 'white'

type PIconProps = {
  name?: string
  size?: SizeType
  color?: ColorsType
  spin?: boolean
}

const sizeClasses: { [key in SizeType]: string } = {
  '4': 'w-4 h-4',
  '5': 'w-5 h-5',
  '6': 'w-6 h-6',
  '8': 'w-8 h-8',
  '10': 'w-10 h-10',
  '12': 'w-12 h-12',
  '16': 'w-16 h-16',
  '20': 'w-20 h-20',
  '24': 'w-24 h-24',
}

const colorsClasses: { [key in ColorsType]: string } = {
  normal: 'text-normal',
  primary: 'text-primary',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  white: 'text-white',
}

export default function PIcon({
  name = 'home',
  size = '6',
  color = 'normal',
  spin = false,
}: PIconProps) {
  const componentName =
    name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Icon'

  const IconComponent = (Icons as IconType)[componentName]

  if (!IconComponent) {
    return <div>Icon Error</div>
  }

  const widthHeightClass = sizeClasses[size]
  const colorsClass = colorsClasses[color]

  const iconClassName = spin
    ? `${widthHeightClass} ${colorsClass} animate-spin`
    : `${widthHeightClass} ${colorsClass}`

  return <IconComponent className={iconClassName} />
}

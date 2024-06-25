'use client'

import * as React from 'react'
import * as Icons from '@heroicons/react/24/outline'

type IconType = {
  [key: string]: React.ComponentType<React.ComponentProps<'svg'>>
}

type SizeType = '4' | '5' | '6' | '8' | '10' | '12' | '16' | '20' | '24'

type PIconProps = {
  name?: string
  size?: SizeType
  color?: string
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
  '24': 'w-24 h-24'
}

export default function PIcon({
  name = 'home',
  size = '6',
  color = 'black',
  spin = false
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

  // กำหนดเงื่อนไขในการใช้งาน spin
  const iconClassName = spin
    ? `${widthHeightClass} text-${color} animate-spin`
    : `${widthHeightClass} text-${color}`

  return <IconComponent className={iconClassName} />
}

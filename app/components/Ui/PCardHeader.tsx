'use client'

type PCardProps = {
  children?: React.ReactNode
  className?: String
}

export default function PCardHeader({ children, className }: PCardProps) {
  return (
    <div className={`px-6 text-title font-semibold flex items-center h-16 ${className}`}>
      {children}
    </div>
  )
}

'use client'

type PCardProps = {
  children?: React.ReactNode
  className?: String
}

export default function PCardFooter({ children, className }: PCardProps) {
  return (
    <div className={`px-6 flex items-center justify-between h-16 ${className}`}>{children}</div>
  )
}

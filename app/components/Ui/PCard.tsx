'use client'

type PCardProps = {
  children?: React.ReactNode
  className?: String
}

export default function PCard({ children, className }: PCardProps) {
  return (
    <div className={`shadow rounded-md bg-white dark:bg-gray-900 ${className}`}>{children}</div>
  )
}

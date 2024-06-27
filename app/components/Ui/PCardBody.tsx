'use client'

type PCardProps = {
  children?: React.ReactNode
  className?: String
}

export default function PCardBody({ children, className }: PCardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

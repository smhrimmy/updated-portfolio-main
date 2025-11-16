import React from 'react'

type Props = {
  inline?: boolean
}

export default function LoadingOverlay({ inline }: Props) {
  const container = inline ? 'flex items-center justify-center py-8' : 'fixed inset-0 z-50 flex items-center justify-center bg-black/40'
  return (
    <div className={container}>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
    </div>
  )
}
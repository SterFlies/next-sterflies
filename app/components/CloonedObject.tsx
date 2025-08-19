'use client'
import React, { useEffect } from 'react'

export interface CloonedObjectProps extends React.HTMLAttributes<HTMLElement> {
  features?: string
  oid: string
}

export default function CloonedObject(props: CloonedObjectProps) {
  useEffect(() => {
    if (!document.querySelector('script[data-clooned-runtime]')) {
      const s = document.createElement('script')
      s.setAttribute('data-clooned-runtime', 'true')
      s.src = 'https://clooned.com/wp-content/uploads/cloons/scripts/clooned.js'
      s.defer = true
      document.head.appendChild(s)
    }
  }, [])

  return React.createElement('clooned-object', props)
}

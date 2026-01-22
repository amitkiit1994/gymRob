'use client'

import { useEffect, useState } from 'react'
import ShareButtons from './ShareButtons'

interface ShareButtonsWrapperProps {
  path: string
  title: string
}

export default function ShareButtonsWrapper({ path, title }: ShareButtonsWrapperProps) {
  const [shareUrl, setShareUrl] = useState<string>('')

  useEffect(() => {
    // Get current domain from window.location
    if (typeof window !== 'undefined') {
      const cleanPath = path.startsWith('/') ? path : `/${path}`
      setShareUrl(`${window.location.origin}${cleanPath}`)
    }
  }, [path])

  if (!shareUrl) {
    return null
  }

  return <ShareButtons url={shareUrl} title={title} />
}


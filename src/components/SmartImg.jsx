import { useState } from 'react'
// Image with lazy loading, fixed aspect box and a graceful gradient fallback if the URL fails.
export default function SmartImg({ src, alt, className = '', eager = false, ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={`img-fallback ${className}`} role="img" aria-label={alt} />
  return <img className={className} src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" onError={() => setFailed(true)} {...rest} />
}

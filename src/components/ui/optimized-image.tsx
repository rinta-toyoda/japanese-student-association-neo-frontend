'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { motion } from 'framer-motion'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string
  showLoadingSpinner?: boolean
}

export function OptimizedImage({ 
  src, 
  alt, 
  fallbackSrc, 
  showLoadingSpinner = true,
  className = '',
  ...props 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setIsLoading(true)
      setHasError(false)
    }
  }

  return (
    <>
      {/* Loading spinner */}
      {isLoading && showLoadingSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
          <motion.div
            className="w-8 h-8 border-4 border-jss-red border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      )}
      
      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
          <div className="text-center text-gray-500 p-4">
            <div className="w-12 h-12 bg-gray-300 rounded mx-auto mb-2" />
            <span className="text-sm">Image unavailable</span>
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0"
      >
        <Image
          src={imgSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={className}
          {...props}
        />
      </motion.div>
    </>
  )
}
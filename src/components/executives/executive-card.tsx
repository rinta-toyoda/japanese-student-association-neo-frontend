'use client'

import { ExecutiveData } from '@/types'
import { motion } from 'framer-motion'
import { OptimizedImage } from '@/components/ui/optimized-image'

interface ExecutiveCardProps {
  executive: ExecutiveData
  isJapanese: boolean
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export function ExecutiveCard({ executive, isJapanese }: ExecutiveCardProps) {
  const data = isJapanese ? executive.jp : executive.en

  return (
    <motion.div
      className="card group cursor-default"
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mx-auto">
          <OptimizedImage
            src={executive.image}
            alt={data.name}
            fill
            className="object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            fallbackSrc={`data:image/svg+xml;base64,${btoa('<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="64" fill="#f3f4f6"/><path d="M64 32C76.1503 32 86 41.8497 86 54C86 66.1503 76.1503 76 64 76C51.8497 76 42 66.1503 42 54C42 41.8497 51.8497 32 64 32Z" fill="#d1d5db"/><path d="M32 96C32 82.7452 42.7452 72 56 72H72C85.2548 72 96 82.7452 96 96V96H32V96Z" fill="#d1d5db"/></svg>')}`}
            sizes="128px"
            showLoadingSpinner={true}
          />
          <div className="absolute inset-0 rounded-full ring-4 ring-white shadow-lg" />
        </div>

        {/* Name and Position */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900">
            {data.name}
          </h3>
          <p className="text-jss-red font-semibold text-sm uppercase tracking-wide">
            {data.position}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {data.description}
        </p>
      </div>
    </motion.div>
  )
}
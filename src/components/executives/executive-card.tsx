'use client'

import { ExecutiveData } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
          <Image
            src={executive.image}
            alt={data.name}
            fill
            className="object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
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
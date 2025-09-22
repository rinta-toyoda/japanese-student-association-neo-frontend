'use client'

import { useAtom } from 'jotai'
import { isJapaneseAtom } from '@/lib/atoms'
import { executivesData } from '@/data'
import { ExecutiveCard } from './executive-card'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export function ExecutivesGrid() {
  const [isJapanese] = useAtom(isJapaneseAtom)

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {executivesData.map((executive, index) => (
            <ExecutiveCard
              key={index}
              executive={executive}
              isJapanese={isJapanese}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
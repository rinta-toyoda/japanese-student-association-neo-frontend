'use client'

import { useAtom } from 'jotai'
import { isJapaneseAtom } from '@/lib/atoms'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function ExecutivesHero() {
  const [isJapanese] = useAtom(isJapaneseAtom)

  return (
    <section className="relative bg-gradient-to-r from-jss-red to-red-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 section-container text-center">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {isJapanese ? (
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-mplus font-bold mb-6"
            >
              役員紹介
            </motion.h1>
          ) : (
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-notable font-bold mb-6"
            >
              Meet Our Team
            </motion.h1>
          )}
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            {isJapanese
              ? 'JSS を支える熱心な役員たちをご紹介します。私たちは学生コミュニティの発展と成長のために日々努力しています。'
              : 'Get to know the passionate executives who drive JSS forward. We work daily to develop and grow our student community.'
            }
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
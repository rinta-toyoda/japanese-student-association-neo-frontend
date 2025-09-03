'use client'

import { useAtom } from 'jotai'
import { isJapaneseAtom } from '@/lib/atoms'
import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function HeroSection() {
  const [isJapanese] = useAtom(isJapaneseAtom)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-jss-skin via-red-50 to-orange-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/assets/images/home/title_background.png')] bg-contain bg-center bg-no-repeat opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {isJapanese ? (
              <>
                <motion.h2
                  variants={itemVariants}
                  className="text-xl md:text-2xl font-mplus font-bold text-gray-700"
                >
                  シドニー大学公認
                </motion.h2>
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mplus font-black text-jss-red leading-tight"
                >
                  日本人学生会
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                >
                  シドニー大学で学ぶ日本人学生のための
                  <br />
                  安心できるコミュニティ
                </motion.p>
              </>
            ) : (
              <>
                <motion.h2
                  variants={itemVariants}
                  className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700"
                >
                  University of Sydney Official
                </motion.h2>
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-notable font-bold text-jss-red leading-tight"
                >
                  Japanese
                  <br />
                  Student
                  <br />
                  Society
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                >
                  A safe and welcoming community
                  <br />
                  for Japanese students at USyd
                </motion.p>
              </>
            )}

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://usu.edu.au/clubs/japanese-student-society"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isJapanese ? '今すぐ入会' : 'Join Now'}
              </motion.a>
              <motion.a
                href="#about"
                className="btn-secondary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isJapanese ? '詳しく見る' : 'Learn More'}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Logo Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/assets/images/home/jss_main_icon.png"
                alt="Japanese Student Society Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
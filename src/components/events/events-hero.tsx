'use client'

import { useAtom } from 'jotai'
import { isJapaneseAtom } from '@/lib/atoms'
import { motion } from 'framer-motion'
import { HiCalendar, HiUsers } from 'react-icons/hi'

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function EventsHero() {
  const [isJapanese] = useAtom(isJapaneseAtom)

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-jss-red text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <HiCalendar className="h-32 w-32 text-white/20" />
        </div>
        <div className="absolute bottom-10 right-10">
          <HiUsers className="h-40 w-40 text-white/20" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <HiCalendar className="h-24 w-24 text-white/20" />
        </div>
      </div>

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
              イベント情報
            </motion.h1>
          ) : (
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-notable font-bold mb-6"
            >
              Our Events
            </motion.h1>
          )}
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-8"
          >
            {isJapanese
              ? 'JSS の活動やイベントに参加して、同じ志を持つ仲間と出会い、一緒に成長しましょう。過去のイベントもチェックして、私たちのコミュニティの活動を知ってください。'
              : 'Join JSS activities and events to meet like-minded peers and grow together. Check out our past events to learn about our community activities.'
            }
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="https://usu.edu.au/clubs/japanese-student-society"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-jss-red px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isJapanese ? '参加登録' : 'Register'}
            </motion.a>
            <motion.a
              href="#upcoming"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-jss-red transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isJapanese ? '今後のイベント' : 'Upcoming Events'}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
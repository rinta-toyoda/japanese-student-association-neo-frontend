'use client'

import { useAtom } from 'jotai'
import { isJapaneseAtom } from '@/lib/atoms'
import { aboutUsData } from '@/data'
import { SectionTitle } from '@/components/ui/section-title'
import { motion } from 'framer-motion'
import { OptimizedImage } from '@/components/ui/optimized-image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function AboutSection() {
  const [isJapanese] = useAtom(isJapaneseAtom)

  return (
    <section id="about" className="section-container scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>
          {isJapanese ? (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-mplus font-bold text-jss-red">
              団体について
            </h2>
          ) : (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-notable font-bold text-jss-red">
              About Us
            </h2>
          )}
        </SectionTitle>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="prose prose-lg max-w-none">
              {(isJapanese ? aboutUsData.jp : aboutUsData.en)
                .split('\n\n')
                .map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className="text-gray-700 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </motion.p>
                ))}
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.a
                href="/executives"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isJapanese ? '役員を見る' : 'Meet Our Team'}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="/assets/images/home/jss_activity.jpg"
                alt={isJapanese ? 'JSS活動の様子' : 'JSS Activity'}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 448px"
                showLoadingSpinner={true}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
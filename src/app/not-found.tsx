'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { useAtom } from 'jotai'
import { isJapaneseAtom } from '@/lib/atoms'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  const [isJapanese] = useAtom(isJapaneseAtom)

  return (
    <MainLayout>
      <section className="section-container min-h-[60vh] flex items-center">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold text-jss-red mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isJapanese ? 'ページが見つかりません' : 'Page Not Found'}
            </h2>
            <p className="text-gray-600 mb-8">
              {isJapanese
                ? 'お探しのページは存在しないか、移動された可能性があります。'
                : 'The page you are looking for might have been removed or is temporarily unavailable.'
              }
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="btn-primary">
                {isJapanese ? 'ホームに戻る' : 'Back to Home'}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
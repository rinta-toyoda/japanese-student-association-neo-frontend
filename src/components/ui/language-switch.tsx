'use client'

import { useAtom } from 'jotai'
import { switchLanguageAtom, isJapaneseAtom } from '@/lib/atoms'
import { motion } from 'framer-motion'

export function LanguageSwitch() {
  const [isJapanese] = useAtom(isJapaneseAtom)
  const [, switchLanguage] = useAtom(switchLanguageAtom)

  return (
    <motion.button
      type="button"
      onClick={() => switchLanguage()}
      className="flex h-8 w-16 items-center rounded-full border border-gray-300 bg-white px-1 transition-colors hover:border-gray-400"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isJapanese ? 'English' : 'Japanese'}`}
    >
      {/* 日本語ラベル */}
      <span
        className={`flex-1 rounded-full py-1 text-xs font-medium transition-colors ${
          isJapanese
            ? 'bg-jss-red text-white'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        JP
      </span>

      {/* 英語ラベル */}
      <span
        className={`flex-1 rounded-full py-1 text-xs font-medium transition-colors ${
          !isJapanese
            ? 'bg-jss-red text-white'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        EN
      </span>
    </motion.button>
  )
}
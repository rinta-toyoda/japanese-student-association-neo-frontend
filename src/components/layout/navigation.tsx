'use client'

import { useState } from 'react'
import { useAtom } from 'jotai'
import { isJapaneseAtom } from '@/lib/atoms'
import { navigationItems } from '@/data'
import { LanguageSwitch } from '@/components/ui/language-switch'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

const panelVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
}

export function Navigation() {
  const [isJapanese] = useAtom(isJapaneseAtom)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-jss-skin/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-12 w-12"
              >
                <Image
                  src="/assets/images/common/jss_icon_navigation.png"
                  alt="JSS Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="48px"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center space-x-6 lg:flex">
              {navigationItems.map((item) => (
                <li key={item.href || item.title.en}>
                  {item.href?.startsWith('http') ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-jss-red font-medium transition-colors"
                    >
                      {isJapanese ? item.title.ja : item.title.en}
                    </a>
                  ) : (
                    <Link
                      href={item.href || '/'}
                      className="text-gray-700 hover:text-jss-red font-medium transition-colors"
                    >
                      {isJapanese ? item.title.ja : item.title.en}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitch />
            <motion.a
              href="https://usu.edu.au/clubs/japanese-student-society"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isJapanese ? '入会する' : 'Join Us!'}
            </motion.a>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitch />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="border-t border-gray-100 bg-white py-4">
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.href || item.title.en}>
                      {item.href?.startsWith('http') ? (
                        <a
                          href={item.href}
                          target={item.target}
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-jss-red rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {isJapanese ? item.title.ja : item.title.en}
                        </a>
                      ) : (
                        <Link
                          href={item.href || '/'}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-jss-red rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {isJapanese ? item.title.ja : item.title.en}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li className="px-4 pt-2">
                    <a
                      href="https://usu.edu.au/clubs/japanese-student-society"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary block text-center hover:scale-105 transition-transform"
                      onClick={() => setIsOpen(false)}
                    >
                      {isJapanese ? '入会する' : 'Join Us!'}
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
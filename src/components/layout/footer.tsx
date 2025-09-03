'use client'

import { useAtom } from 'jotai'
import { isJapaneseAtom } from '@/lib/atoms'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function Footer() {
  const [isJapanese] = useAtom(isJapaneseAtom)

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              {isJapanese ? 'シドニー大学日本人学生会' : 'Japanese Student Society'}
            </h3>
            <p className="text-gray-300 text-sm">
              {isJapanese 
                ? 'シドニー大学公認の学生団体として、日本人学生同士の交流とサポートを行っています。'
                : 'An officially recognized student organization fostering connections and support among Japanese students at the University of Sydney.'
              }
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              {isJapanese ? 'お問い合わせ' : 'Contact Us'}
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>{isJapanese ? 'シドニー大学' : 'University of Sydney'}</p>
              <p>{isJapanese ? 'オーストラリア、NSW 2006' : 'NSW 2006, Australia'}</p>
              <a 
                href="https://docs.google.com/forms/d/1QuJZnQ-fgENjk-xLXPi_7gFa-M3dNvFHe08ijYjNIR4/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {isJapanese ? 'お問い合わせフォーム' : 'Contact Form'}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              {isJapanese ? 'SNS' : 'Follow Us'}
            </h4>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/jss_usyd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/japanese-student-society-the-university-of-sydney/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © 2025 {isJapanese ? 'シドニー大学日本人学生会' : 'Japanese Student Society at University of Sydney'}. 
            {isJapanese ? ' すべての権利予約。' : ' All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
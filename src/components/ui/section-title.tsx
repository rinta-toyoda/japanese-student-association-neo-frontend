import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      className={`section-title ${className}`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
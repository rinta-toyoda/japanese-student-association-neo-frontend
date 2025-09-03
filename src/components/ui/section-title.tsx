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
      animate="visible"
    >
      {children}
    </motion.div>
  )
}
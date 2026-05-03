'use client'
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/* ── Fade up on scroll ── */
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

interface FadeUpProps extends HTMLMotionProps<'div'> {
  delay?: number
  children: React.ReactNode
}

export function FadeUp({ delay = 0, children, ...props }: FadeUpProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/* ── Stagger container ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

interface StaggerProps {
  children: React.ReactNode
  className?: string
}

export function StaggerList({ children, className }: StaggerProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  )
}

/* ── Page transition wrapper ── */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Hover scale ── */
export function HoverScale({
  children, scale = 1.02, className
}: { children: React.ReactNode, scale?: number, className?: string }) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Count up number ── */
export function CountUp({ value, suffix = '' }: { value: string, suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'backOut', delay: 0.3 }}
    >
      {value}{suffix}
    </motion.span>
  )
}

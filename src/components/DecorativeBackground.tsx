'use client'

import { motion } from 'framer-motion'

export function DecorativeBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ contain: 'layout paint', transform: 'translateZ(0)', willChange: 'transform' }}
    >
      {/* Clean white base with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/30" />

      {/* Elegant glass-like gradient orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute -top-20 -left-16 h-[24rem] w-[24rem] sm:h-[32rem] sm:w-[32rem] rounded-full blur-2xl sm:blur-3xl transform-gpu"
        style={{
          background: 'radial-gradient(closest-side, rgba(255,255,255,0.8), rgba(248,250,252,0.4), transparent 70%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        className="absolute top-[20%] right-[-8%] h-[20rem] w-[20rem] sm:h-[28rem] sm:w-[28rem] rounded-full blur-2xl sm:blur-3xl transform-gpu"
        style={{
          background: 'radial-gradient(closest-side, rgba(255,255,255,0.6), rgba(241,245,249,0.3), transparent 70%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
        className="absolute bottom-[-10%] left-[10%] h-[22rem] w-[22rem] sm:h-[30rem] sm:w-[30rem] rounded-full blur-2xl sm:blur-3xl transform-gpu"
        style={{
          background: 'radial-gradient(closest-side, rgba(255,255,255,0.7), rgba(248,250,252,0.2), transparent 70%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Additional subtle glass elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="absolute top-[60%] left-[60%] h-[16rem] w-[16rem] sm:h-[20rem] sm:w-[20rem] rounded-full blur-xl sm:blur-2xl transform-gpu"
        style={{
          background: 'radial-gradient(closest-side, rgba(255,255,255,0.4), rgba(241,245,249,0.1), transparent 70%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Subtle white vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(255,255,255,0.1),transparent_60%)]" />
      
      {/* Additional glass overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-slate-100/10" />
    </div>
  )
}



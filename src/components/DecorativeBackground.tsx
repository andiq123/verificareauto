'use client'

import { motion } from 'framer-motion'

export function DecorativeBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ contain: 'layout paint', transform: 'translateZ(0)', willChange: 'transform' }}
    >
      {/* Clean base */}
      <div className="absolute inset-0 bg-[var(--background)]" />

      {/* Simplified gradient blobs - reduced blur for mobile performance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute -top-16 -left-10 h-[20rem] w-[20rem] sm:h-[28rem] sm:w-[28rem] rounded-full blur-xl sm:blur-3xl transform-gpu"
        style={{
          background: 'radial-gradient(closest-side, rgba(59,130,246,0.12), transparent 70%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        className="absolute top-[25%] right-[-6%] h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem] rounded-full blur-xl sm:blur-3xl transform-gpu"
        style={{
          background: 'radial-gradient(closest-side, rgba(99,102,241,0.10), transparent 70%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
        className="absolute bottom-[-8%] left-[15%] h-[20rem] w-[20rem] sm:h-[26rem] sm:w-[26rem] rounded-full blur-xl sm:blur-3xl transform-gpu"
        style={{
          background: 'radial-gradient(closest-side, rgba(14,165,233,0.08), transparent 70%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(0,0,0,0.04),transparent_60%)]" />
    </div>
  )
}



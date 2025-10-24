'use client'

import { motion } from 'framer-motion'

export function DecorativeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Clean base */}
      <div className="absolute inset-0 bg-white" />

      {/* Mesh gradient blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute -top-16 -left-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.18), transparent 70%)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
        className="absolute top-[25%] right-[-6%] h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.16), transparent 70%)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="absolute bottom-[-8%] left-[15%] h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(14,165,233,0.14), transparent 70%)' }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(0,0,0,0.06),transparent_60%)]" />
    </div>
  )
}



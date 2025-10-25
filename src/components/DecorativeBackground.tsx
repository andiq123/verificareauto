'use client'

import { motion } from 'framer-motion'

export function DecorativeBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ contain: 'layout paint', transform: 'translateZ(0)', willChange: 'transform' }}
    >
      {/* Modern gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/20" />

      {/* Subtle animated gradient orbs with better performance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0.0, 0.2, 1] }}
        className="absolute -top-32 -left-24 h-[28rem] w-[28rem] sm:h-[36rem] sm:w-[36rem] rounded-full blur-3xl sm:blur-[64px] transform-gpu"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.05), transparent 60%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
        className="absolute top-[15%] right-[-12%] h-[24rem] w-[24rem] sm:h-[32rem] sm:w-[32rem] rounded-full blur-3xl sm:blur-[64px] transform-gpu"
        style={{
          background: 'radial-gradient(circle at 70% 20%, rgba(16, 185, 129, 0.08), rgba(34, 197, 94, 0.04), transparent 65%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.4, 0.0, 0.2, 1], delay: 0.4 }}
        className="absolute bottom-[-15%] left-[8%] h-[26rem] w-[26rem] sm:h-[34rem] sm:w-[34rem] rounded-full blur-3xl sm:blur-[64px] transform-gpu"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.06), rgba(139, 92, 246, 0.03), transparent 70%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Additional subtle accent elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.4, 0.0, 0.2, 1], delay: 0.6 }}
        className="absolute top-[65%] left-[65%] h-[18rem] w-[18rem] sm:h-[22rem] sm:w-[22rem] rounded-full blur-2xl sm:blur-[48px] transform-gpu"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05), rgba(251, 191, 36, 0.02), transparent 75%)',
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Modern subtle vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      
      {/* Additional depth layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-50/5 to-blue-50/10" />
      
      {/* Subtle noise texture for modern feel */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}



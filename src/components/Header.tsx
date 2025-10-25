'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, Car, FileText } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 z-20 w-full border-b border-white/30 bg-white/90 backdrop-blur-2xl shadow-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 shadow-lg">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-medium text-slate-600 truncate">Serviciul Vamal</div>
              <div className="text-sm sm:text-lg font-bold text-slate-900 truncate">Republica Moldova</div>
            </div>
          </motion.div>

          {/* Right side - Service info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
            className="hidden lg:flex items-center gap-4 xl:gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-slate-600 px-3 py-2 rounded-full bg-blue-50/80 border border-blue-200/60">
              <Globe className="h-4 w-4 text-blue-500" />
              <span className="font-medium">Autovehicule Străine</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 px-3 py-2 rounded-full bg-emerald-50/80 border border-emerald-200/60">
              <Car className="h-4 w-4 text-emerald-500" />
              <span className="font-medium">Verificare Online</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 px-3 py-2 rounded-full bg-amber-50/80 border border-amber-200/60">
              <FileText className="h-4 w-4 text-amber-500" />
              <span className="font-medium">180 Zile/An</span>
            </div>
          </motion.div>

          {/* Mobile service indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:hidden flex items-center gap-2 text-xs text-slate-500 px-2 py-1 rounded-full bg-slate-100/80 border border-slate-200/60"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium">Online</span>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

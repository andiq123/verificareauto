'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, Car, FileText } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 z-20 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 shadow-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-600">Serviciul Vamal</div>
              <div className="text-lg font-bold text-zinc-900">Republica Moldova</div>
            </div>
          </motion.div>

          {/* Right side - Service info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Globe className="h-4 w-4 text-blue-600" />
              <span>Autovehicule Străine</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Car className="h-4 w-4 text-green-600" />
              <span>Verificare Online</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <FileText className="h-4 w-4 text-orange-600" />
              <span>180 Zile/An</span>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

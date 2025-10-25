'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlateInput } from '@/components/PlateInput'
import { VerificationResult } from '@/components/VerificationResult'
import { VerificationResponse } from '@/types'
import { Header } from '@/components/Header'
import { LegalInfo } from '@/components/LegalInfo'
import { Shield, Timer, Calendar, Globe, Zap, CheckCircle, RefreshCw } from 'lucide-react'

export default function Home() {
  const [result, setResult] = useState<VerificationResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasVerified, setHasVerified] = useState(false) // Track if user has performed a verification
  const resultsRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)

  // Scroll to results when verification is complete
  useEffect(() => {
    if (result && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'center'
        })
      }, 100) // Small delay to ensure animation has started
    }
  }, [result])

  // Scroll to input when starting new search (only after a verification has been performed)
  useEffect(() => {
    if (!result && hasVerified && inputRef.current) {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        const element = inputRef.current
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - 100 // 100px offset upward
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      })
    }
  }, [result, hasVerified])

  const handlePlateSubmit = async (plateNumber: string) => {
    setLoading(true)
    setError('')
    setResult(null)
    setHasVerified(true) // Mark that user has performed a verification

    try {
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plateNumber }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to verify vehicle')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleNewSearch = () => {
    setResult(null)
    setError('')
  }

  return (
    <div className="min-h-[100svh]">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-slate-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Verificare Autovehicule Străine
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Verificați câte zile vă mai rămân pentru autovehiculele cu numere străine în Republica Moldova. 
            <span className="font-semibold text-blue-600"> Limita legală: 180 zile pe an.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-slate-500">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-50 border border-emerald-200">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span className="font-medium">Verificare instantanee</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 border border-blue-200">
              <Timer className="h-4 w-4 text-blue-500" />
              <span className="font-medium">Date simulate</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-50 border border-amber-200">
              <RefreshCw className="h-4 w-4 text-amber-500" />
              <span className="font-medium">Resetare anuală</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content with modern gradient ring */}
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-4xl">
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-60 blur-xl sm:blur-2xl" />
            <div className="relative w-full">
              <AnimatePresence mode="wait" initial={false}>
                {!result ? (
                  <motion.div 
                    key="input"
                    ref={inputRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeOut"
                    }}
                  >
                    <PlateInput onSubmit={handlePlateSubmit} loading={loading} />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="result"
                    ref={resultsRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeOut"
                    }}
                  >
                    <VerificationResult result={result} onNewSearch={handleNewSearch} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Feature banners below input (only before results) */}
        <AnimatePresence>
          {!result && (
            <motion.div
              key="feature-banners"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              className="mx-auto mt-12"
            >
              <div className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
            {[
              {
                icon: Shield,
                title: 'Regulament oficial',
                desc: 'Autovehicule străine: 180 zile/an.',
                color: 'blue',
                gradient: 'from-blue-500 to-indigo-600',
                bgGradient: 'from-blue-50/90 to-indigo-50/90',
                iconBg: 'from-blue-500 to-indigo-600',
                accent: 'blue-500'
              },
              {
                icon: Zap,
                title: 'Verificare instantanee',
                desc: 'Obțineți un raport simulat instant.',
                color: 'emerald',
                gradient: 'from-emerald-500 to-green-600',
                bgGradient: 'from-emerald-50/90 to-green-50/90',
                iconBg: 'from-emerald-500 to-green-600',
                accent: 'emerald-500'
              },
              {
                icon: Calendar,
                title: 'Resetare anuală',
                desc: 'Zilele se resetează la 1 ianuarie.',
                color: 'amber',
                gradient: 'from-amber-500 to-orange-600',
                bgGradient: 'from-amber-50/90 to-orange-50/90',
                iconBg: 'from-amber-500 to-orange-600',
                accent: 'amber-500'
              },
            ].map(({ icon: Icon, title, desc, color, gradient, bgGradient, iconBg, accent }, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 px-8 py-8 shadow-glass-lg backdrop-blur-xl transition-all duration-500 hover:bg-white/90 hover:shadow-glass-xl hover:-translate-y-2 hover:scale-[1.02] transform-gpu"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform-gpu`} />
                
                {/* Left accent bar with gradient */}
                <div className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${gradient} shadow-lg`} />
                
                {/* Content */}
                <div className="relative flex items-start gap-6">
                  {/* Icon container with modern design */}
                  <div className={`mt-1 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${iconBg} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 transform-gpu`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1">
                    <div className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                      {title}
                    </div>
                    <div className="text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {desc}
                    </div>
                    
                    {/* Decorative element */}
                    <div className={`mt-4 h-1 w-12 bg-gradient-to-r ${gradient} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-500 transform-gpu`} />
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10 transform-gpu`} />
              </motion.div>
            ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-lg mx-auto mt-8 p-6 bg-red-50/90 border border-red-200/60 rounded-2xl text-red-800 text-center shadow-glass backdrop-blur-sm"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold">Eroare</span>
              </div>
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-center mt-16 text-sm text-slate-500"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200/60 backdrop-blur-sm">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            Doar demonstrație. Datele sunt simulate.
          </div>
        </motion.div>
        
        <LegalInfo />
      </div>
    </div>
  )
}
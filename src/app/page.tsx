'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { PlateInput } from '@/components/PlateInput'
import { VerificationResult } from '@/components/VerificationResult'
import { VerificationResponse } from '@/types'
import { Header } from '@/components/Header'
import { LegalInfo } from '@/components/LegalInfo'
import { Shield, Timer, RefreshCw, Globe } from 'lucide-react'

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
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
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
            <motion.div 
              layout 
              className="relative w-full"
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              {!result ? (
                <div ref={inputRef}>
                  <PlateInput onSubmit={handlePlateSubmit} loading={loading} />
                </div>
              ) : (
                <div ref={resultsRef}>
                  <VerificationResult result={result} onNewSearch={handleNewSearch} />
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Feature banners below input (only before results) */}
        {!result && (
          <>
            <div className="mx-auto mt-12 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1], delay: 0.2 }}
              className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
            {[
              {
                icon: Shield,
                title: 'Regulament oficial',
                desc: 'Autovehicule străine: 180 zile/an.',
                color: 'blue'
              },
              {
                icon: Timer,
                title: 'Verificare rapidă',
                desc: 'Obțineți un raport simulat instant.',
                color: 'emerald'
              },
              {
                icon: RefreshCw,
                title: 'Resetare anuală',
                desc: 'Zilele se resetează la 1 ianuarie.',
                color: 'amber'
              },
            ].map(({ icon: Icon, title, desc, color }, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/40 bg-white/70 px-6 py-6 shadow-glass backdrop-blur-xl transition-all duration-300 hover:bg-white/80 hover:shadow-glass-lg hover:-translate-y-1`}
              >
                <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-${color}-500 to-${color}-600`} />
                <div className="relative flex items-start gap-4">
                  <div className={`mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-${color}-50/90 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 text-${color}-600`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-slate-900 mb-1">{title}</div>
                    <div className="text-sm text-slate-600 leading-relaxed">{desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            className="max-w-lg mx-auto mt-8 p-6 bg-red-50/90 border border-red-200/60 rounded-2xl text-red-800 text-center shadow-glass backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="font-semibold">Eroare</span>
            </div>
            {error}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
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
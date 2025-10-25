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
      <div className="container mx-auto px-4 pt-20 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-zinc-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent">
            Verificare Autovehicule Străine
          </h1>
          <p className="mt-4 text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Verificați câte zile vă mai rămân pentru autovehiculele cu numere străine în Republica Moldova. 
            <span className="font-semibold text-blue-700"> Limita legală: 180 zile pe an.</span>
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span>Verificare instantanee</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-blue-600" />
              <span>Date simulate</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-orange-600" />
              <span>Resetare anuală</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content with gradient ring */}
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none xl:max-w-none 2xl:max-w-none">
            <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 opacity-40 blur-md sm:blur-lg" />
            <motion.div layout className="relative w-full">
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
            <div className="mx-auto mt-6 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
            {[
              {
                icon: Shield,
                title: 'Regulament oficial',
                desc: 'Autovehicule străine: 180 zile/an.',
              },
              {
                icon: Timer,
                title: 'Verificare rapidă',
                desc: 'Obțineți un raport simulat instant.',
              },
              {
                icon: RefreshCw,
                title: 'Resetare anuală',
                desc: 'Zilele se resetează la 1 ianuarie.',
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white/90 px-4 py-4 shadow-sm backdrop-blur transition-shadow hover:shadow-md">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600" />
                <div className="relative flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                    <Icon className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-900">{title}</div>
                    <div className="text-xs text-zinc-600">{desc}</div>
                  </div>
                </div>
              </div>
            ))}
            </motion.div>
          </>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-md mx-auto mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center"
          >
            {error}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mt-14 text-sm text-zinc-500"
        >
          Doar demonstrație. Datele sunt simulate.
        </motion.div>
        
        <LegalInfo />
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Car, Search, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { validatePlateNumber, formatPlateNumber } from '@/lib/utils'
import { PlateInputProps } from '@/types'

export function PlateInput({ onSubmit, loading = false }: PlateInputProps) {
  const [plateNumber, setPlateNumber] = useState('')
  const [error, setError] = useState('')
  const [invalidCharError, setInvalidCharError] = useState('')

  const MAX_PLATE_LENGTH = 12 // Maximum characters for license plates worldwide

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setInvalidCharError('')

    if (!plateNumber.trim()) {
      setError('Vă rugăm să introduceți un număr de înmatriculare')
      return
    }

    const formattedPlate = formatPlateNumber(plateNumber)
    
    if (!validatePlateNumber(formattedPlate)) {
      setError('Vă rugăm să introduceți un format valid (ex: AB123CD)')
      return
    }

    onSubmit(formattedPlate)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase()
    
    // Check character limit
    if (value.length > MAX_PLATE_LENGTH) {
      setInvalidCharError(`Maxim ${MAX_PLATE_LENGTH} caractere permise`)
      return
    }
    
    // Regex for most countries' license plates: letters, numbers, spaces, hyphens, dots
    const plateRegex = /^[A-Z0-9\s\-\.]*$/
    
    if (plateRegex.test(value)) {
      setPlateNumber(value)
      setError('')
      setInvalidCharError('')
    } else {
      setInvalidCharError('Doar litere, cifre, spații, cratime și puncte sunt permise')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut"
      }}
      className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
    >
      <Card className="rounded-3xl border border-white/40 bg-white/80 shadow-glass-lg backdrop-blur-xl">
        <CardHeader className="text-center px-6 sm:px-8 py-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mx-auto mb-6 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50/90 to-indigo-50/90 backdrop-blur-sm shadow-lg"
          >
            <Car className="h-10 w-10 sm:h-12 sm:w-12 text-blue-700" aria-hidden="true" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-3">
              Verifică un autovehicul
            </CardTitle>
            <CardDescription className="text-base sm:text-lg text-slate-600 leading-relaxed px-2">
              Introduceți orice număr de înmatriculare pentru a obține un raport de verificare simulat
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="px-6 sm:px-8 pb-8">
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className="space-y-3">
              <label htmlFor="plate" className="text-sm sm:text-base font-semibold text-slate-700 block">
                Numărul de înmatriculare
              </label>
              <div className="group relative flex items-center rounded-2xl border-2 border-slate-200/70 bg-white/90 backdrop-blur-sm transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-lg min-h-[60px] sm:min-h-[64px]">
                <div className="ml-4 sm:ml-5 flex h-11 w-16 sm:h-12 sm:w-18 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md">
                  EU
                </div>
                <div className="mx-4 sm:mx-5 h-7 sm:h-8 w-px bg-gradient-to-b from-slate-200 to-slate-300" />
                <input
                  id="plate"
                  type="text"
                  placeholder="Numărul de înmatriculare"
                  value={plateNumber}
                  onChange={handleInputChange}
                  maxLength={MAX_PLATE_LENGTH}
                  className="peer flex-1 bg-transparent py-4 sm:py-5 pr-4 sm:pr-5 text-sm sm:text-base font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-slate-900 placeholder:text-slate-400 placeholder:text-xs sm:placeholder:text-sm outline-none focus:outline-none transition-all duration-200"
                  disabled={loading}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 px-3 py-2 rounded-lg bg-slate-50/80 border border-slate-200/60">
                <Info className="h-4 w-4 flex-shrink-0" />
                <span className="leading-relaxed">Doar demonstrație: orice introducere generează un raport aleatoriu.</span>
              </div>
              <AnimatePresence>
                {invalidCharError && (
                  <motion.p 
                    key="invalid-char-error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-red-600 font-medium flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                    {invalidCharError}
                  </motion.p>
                )}
                {error && (
                  <motion.p 
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-red-600 font-medium flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <Button
              type="submit"
              variant="primary"
              className="w-full h-14 sm:h-16 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
                  <span>Verificare...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5" />
                  <span>Verifică Statusul</span>
                </div>
              )}
            </Button>
          </motion.form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0.0, 0.2, 1]
      }}
      className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
    >
      <Card className="rounded-2xl border border-white/50 bg-white/80 shadow-lg">
        <CardHeader className="text-center px-4 sm:px-6">
          <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
            <Car className="h-8 w-8 sm:h-10 sm:w-10 text-blue-700" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Verifică un autovehicul</CardTitle>
          <CardDescription className="text-base sm:text-lg text-zinc-600 mt-2 px-2">
            Introduceți orice număr de înmatriculare pentru a obține un raport de verificare simulat
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="plate" className="text-sm sm:text-base font-medium text-zinc-700">
                Numărul de înmatriculare
              </label>
              <div className="group relative flex items-center rounded-xl border-2 border-zinc-200 bg-white shadow-lg transition-all duration-200 focus-within:border-blue-500 focus-within:shadow-xl focus-within:shadow-blue-500/10 min-h-[56px] sm:min-h-[60px]">
                <div className="ml-3 sm:ml-4 flex h-10 w-14 sm:h-11 sm:w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md">
                  EU
                </div>
                <div className="mx-3 sm:mx-4 h-6 sm:h-7 w-px bg-gradient-to-b from-zinc-200 to-zinc-300" />
                <input
                  id="plate"
                  type="text"
                  placeholder="Numărul de înmatriculare"
                  value={plateNumber}
                  onChange={handleInputChange}
                  maxLength={MAX_PLATE_LENGTH}
                  className="peer flex-1 bg-transparent py-3 sm:py-4 pr-3 sm:pr-4 text-sm sm:text-base font-mono tracking-[0.15em] sm:tracking-[0.25em] uppercase text-zinc-900 placeholder:text-zinc-400 placeholder:text-xs sm:placeholder:text-sm outline-none"
                  disabled={loading}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
                <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Doar demonstrație: orice introducere generează un raport aleatoriu.</span>
              </div>
              {invalidCharError && (
                <p className="text-sm text-red-600 font-medium">{invalidCharError}</p>
              )}
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
            </div>
            <Button
              type="submit"
              variant="primary"
              className="w-full h-12 sm:h-14 rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
                  Verificare...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Verifică Statusul
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

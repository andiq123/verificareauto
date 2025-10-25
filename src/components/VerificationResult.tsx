'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { VerificationResultProps } from '@/types'
import { gradientPatterns, animationPatterns, cardStyles, responsiveClasses } from '@/lib/styles'

export function VerificationResult({ result, onNewSearch }: VerificationResultProps) {
  const getStatusEmoji = () => {
    switch (result.status) {
      case 'valid':
        return '✅'
      case 'limit_reached':
        return '🚫'
      case 'expired':
        return '⏰'
      case 'not_found':
        return '❓'
      default:
        return '⚠️'
    }
  }

  const getStatusColor = () => {
    switch (result.status) {
      case 'valid':
        return 'text-green-600'
      case 'limit_reached':
        return 'text-red-600'
      case 'expired':
        return 'text-orange-600'
      case 'not_found':
        return 'text-yellow-600'
      default:
        return 'text-gray-600'
    }
  }

  const getStatusMessage = () => {
    switch (result.status) {
      case 'valid':
        return 'Autovehiculul este conform cu regulamentul'
      case 'limit_reached':
        return 'Limita de 180 zile a fost atinsă'
      case 'expired':
        return 'Autovehiculul a ieșit din Moldova'
      case 'not_found':
        return 'Autovehiculul nu a fost găsit în înregistrări'
      default:
        return 'Status necunoscut'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.1
      }}
      className="w-full mx-auto"
    >
      {/* Header Section */}
      <div className={`relative overflow-hidden rounded-3xl ${gradientPatterns.blueHeader} shadow-glass-lg mb-8`}>
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative px-6 sm:px-8 py-8 sm:py-10">
          <motion.div 
            {...animationPatterns.fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-6">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-sm shadow-lg"
              >
                <span className="text-3xl sm:text-4xl">{getStatusEmoji()}</span>
              </motion.div>
              <div className="text-center sm:text-left">
                <div className="text-xs sm:text-sm font-medium text-blue-50 mb-2 tracking-wide uppercase">Numărul de înmatriculare</div>
                <h1 className={`${responsiveClasses.text.heading} text-white mb-3 font-black`}>
                  {result.plateNumber}
                </h1>
                <div className="text-base sm:text-lg font-semibold text-white/90">
                  {getStatusMessage()}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:gap-8">
        {/* Main Stats - Only show if vehicle was found */}
        {result.status !== 'not_found' && (
          <motion.div 
            {...animationPatterns.fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={responsiveClasses.gridFour}
          >
            {/* Days Used Card */}
            <motion.div 
              {...animationPatterns.fadeInScale}
              transition={{ duration: 0.4, delay: 0.5 }}
              className={`${cardStyles.base} ${gradientPatterns.blueCard} ${gradientPatterns.blueBorder}`}
            >
              <div className={`${cardStyles.hoverOverlay} bg-gradient-to-br from-blue-500/10 to-blue-600/10`}></div>
              <div className={`${cardStyles.content} text-center`}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className={`${cardStyles.iconContainer} ${gradientPatterns.blueIcon}`}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-blue-800">Zile Folosite</span>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                  {result.daysUsed}
                </div>
                <div className="text-sm text-blue-700 font-medium">
                  din 180 zile permise
                </div>
              </div>
            </motion.div>

            {/* Days Remaining Card */}
            <motion.div 
              {...animationPatterns.fadeInScale}
              transition={{ duration: 0.4, delay: 0.6 }}
              className={`${cardStyles.base} ${gradientPatterns.greenCard} ${gradientPatterns.greenBorder}`}
            >
              <div className={`${cardStyles.hoverOverlay} bg-gradient-to-br from-green-500/10 to-emerald-600/10`}></div>
              <div className={`${cardStyles.content} text-center`}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className={`${cardStyles.iconContainer} ${gradientPatterns.greenIcon}`}>
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-green-800">Zile Rămase</span>
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {result.daysRemaining}
                </div>
                <div className="text-sm text-green-700 font-medium">
                  în perioada de 12 luni
                </div>
              </div>
            </motion.div>

            {/* Progress Card */}
            <motion.div 
              {...animationPatterns.fadeInScale}
              transition={{ duration: 0.4, delay: 0.7 }}
              className={`${cardStyles.base} ${gradientPatterns.purpleCard} ${gradientPatterns.purpleBorder}`}
            >
              <div className={`${cardStyles.hoverOverlay} bg-gradient-to-br from-purple-500/10 to-indigo-600/10`}></div>
              <div className={`${cardStyles.content} text-center`}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className={`${cardStyles.iconContainer} ${gradientPatterns.purpleIcon}`}>
                    <span className="text-lg">📊</span>
                  </div>
                  <span className="text-lg font-semibold text-purple-800">Progres</span>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">
                  {Math.round((result.daysUsed / 180) * 100)}%
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(result.daysUsed / 180) * 100}%` }}
                  ></div>
                </div>
                <div className="text-sm text-purple-700 font-medium">
                  din limita anuală
                </div>
              </div>
            </motion.div>

            {/* Status Card */}
            <motion.div 
              {...animationPatterns.fadeInScale}
              transition={{ duration: 0.4, delay: 0.8 }}
              className={`${cardStyles.base} ${gradientPatterns.orangeCard} ${gradientPatterns.orangeBorder}`}
            >
              <div className={`${cardStyles.hoverOverlay} bg-gradient-to-br from-orange-500/10 to-yellow-600/10`}></div>
              <div className={`${cardStyles.content} text-center`}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className={`${cardStyles.iconContainer} ${gradientPatterns.orangeIcon}`}>
                    <span className="text-lg">⚡</span>
                  </div>
                  <span className="text-lg font-semibold text-orange-800">Status</span>
                </div>
                <div className={`text-2xl sm:text-3xl font-bold ${getStatusColor()} mb-2`}>
                  {result.status === 'valid' ? 'Valid' : 
                   result.status === 'limit_reached' ? 'Limită' :
                   result.status === 'expired' ? 'Expirat' : 'Necunoscut'}
                </div>
                <div className="text-sm text-orange-700 font-medium">
                  {result.status === 'valid' ? 'Conform regulamentului' : 
                   result.status === 'limit_reached' ? 'Limita atinsă' :
                   result.status === 'expired' ? 'Ieșit din țară' : 'Status necunoscut'}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

          {/* Not Found Message */}
          {result.status === 'not_found' && (
            <div className="text-center p-8 rounded-xl border border-amber-200/60 bg-amber-50/60 backdrop-blur-sm shadow-glass">
              <div className="text-6xl mb-4">❓</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Autovehiculul nu a fost găsit</h3>
              <p className="text-base text-amber-700 leading-relaxed">
                Acest autovehicul nu apare în înregistrările noastre, ceea ce înseamnă că nu a fost înregistrat în Republica Moldova.
              </p>
            </div>
          )}

          {/* Warnings */}
          {result.warnings.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Avertismente
              </h4>
              {result.warnings.map((warning, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-xl border border-amber-200/60 bg-amber-50/60 backdrop-blur-sm shadow-glass">
                  <span className="text-lg">⚠️</span>
                  <p className="text-base text-amber-800 font-medium leading-relaxed">{warning}</p>
                </div>
              ))}
            </div>
          )}

        {/* Information Section - Only show if vehicle was found */}
        {result.status !== 'not_found' && (
          <motion.div 
            {...animationPatterns.fadeInUp}
            transition={{ duration: 0.5, delay: 0.9 }}
            className={responsiveClasses.grid}
          >
            {/* Entry Information */}
            <motion.div 
              {...animationPatterns.slideInLeft}
              transition={{ duration: 0.5, delay: 1.0 }}
              className={`${cardStyles.base} ${gradientPatterns.indigoCard} ${gradientPatterns.indigoBorder}`}
            >
              <div className={`${cardStyles.hoverOverlay} bg-gradient-to-br from-indigo-500/10 to-blue-600/10`}></div>
              <div className={cardStyles.content}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${cardStyles.iconContainer} ${gradientPatterns.indigoIcon}`}>
                    <span className="text-xl">🚗</span>
                  </div>
                  <h3 className={`${cardStyles.title} text-indigo-800`}>Informații Intrare</h3>
                </div>
                <div className="space-y-4">
                  {result.firstEntry && (
                    <div className="flex justify-between items-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-indigo-100/80 shadow-glass">
                      <span className="font-semibold text-indigo-700">Prima intrare:</span>
                      <span className="font-bold text-indigo-900 text-lg">{new Date(result.firstEntry).toLocaleDateString('ro-RO')}</span>
                    </div>
                  )}
                  {result.lastEntry && (
                    <div className="flex justify-between items-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-indigo-100/80 shadow-glass">
                      <span className="font-semibold text-indigo-700">Ultima intrare:</span>
                      <span className="font-bold text-indigo-900 text-lg">{new Date(result.lastEntry).toLocaleDateString('ro-RO')}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Counting Period Information */}
            <motion.div 
              {...animationPatterns.slideInRight}
              transition={{ duration: 0.5, delay: 1.1 }}
              className={`${cardStyles.base} ${gradientPatterns.emeraldCard} ${gradientPatterns.emeraldBorder}`}
            >
              <div className={`${cardStyles.hoverOverlay} bg-gradient-to-br from-emerald-500/10 to-green-600/10`}></div>
              <div className={cardStyles.content}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${cardStyles.iconContainer} ${gradientPatterns.emeraldIcon}`}>
                    <span className="text-xl">📅</span>
                  </div>
                  <h3 className={`${cardStyles.title} text-emerald-800`}>Perioada de Numărare</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-emerald-100/80 shadow-glass">
                    <span className="font-semibold text-emerald-700">Începe:</span>
                    <span className="font-bold text-emerald-900 text-lg">{new Date(result.countingPeriodStart).toLocaleDateString('ro-RO')}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-emerald-100/80 shadow-glass">
                    <span className="font-semibold text-emerald-700">Se termină:</span>
                    <span className="font-bold text-emerald-900 text-lg">{new Date(result.countingPeriodEnd).toLocaleDateString('ro-RO')}</span>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-100/80 to-indigo-100/80 border border-blue-200/60 backdrop-blur-sm shadow-glass">
                    <p className="text-sm text-blue-800 font-semibold leading-relaxed text-center">
                      🔄 Zilele se resetează la 180 pe {new Date(result.countingPeriodEnd).toLocaleDateString('ro-RO')} (12 luni de la prima intrare)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Action Button */}
        <motion.div
          {...animationPatterns.fadeInUp}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="pt-6"
        >
          <Button
            onClick={onNewSearch}
            variant="primary"
            size="xl"
            className="w-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <span className="text-xl">🔍</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Verifică Alt Autovehicul</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

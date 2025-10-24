'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Clock, Shield, Users, Phone, Calendar, Scale, BookOpen } from 'lucide-react'

export function LegalInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      className="mt-16 max-w-none mx-auto"
    >
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 shadow-sm mb-6">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-6 sm:px-8 py-6 sm:py-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shadow-sm">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xs font-medium text-slate-100 mb-1 tracking-wide uppercase">Material Explicativ Oficial</div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  Serviciul Vamal RM
                </h2>
                <div className="text-sm font-medium text-white/90">
                  Introducerea mijloacelor de transport cu numere străine
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:gap-8">
        {/* First Row - Key Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Who Can Import */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Cine poate introduce mijloacele de transport?</h3>
              </div>
              <div className="space-y-4">
                <p className="text-base text-blue-800 leading-relaxed mb-4">
                  Pot introduce mijloace de transport străine în regim vamal de admitere temporară declarându-le prin acțiune:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white text-sm font-bold">1</div>
                    <span className="text-base text-blue-800 font-medium">Persoanele fizice stabilite în afara teritoriului vamal</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white text-sm font-bold">2</div>
                    <span className="text-base text-blue-800 font-medium">Persoanele fizice stabilite pe teritoriul vamal</span>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-blue-100 border border-blue-200">
                  <p className="text-xs text-blue-700 italic">
                    Art. 318 alin. (2) și art. 427 alin. (19) din Codul vamal al RM nr. 95/2021
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Time Period */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800">Termenul de admitere temporară</h3>
              </div>
              <div className="space-y-4">
                <p className="text-base text-green-800 leading-relaxed mb-4">
                  Mijloacele de transport de uz privat pot rămâne pe teritoriul vamal:
                </p>
                <div className="text-center p-6 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200">
                  <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">180</div>
                  <div className="text-lg font-semibold text-green-800">zile într-un interval de</div>
                  <div className="text-2xl font-bold text-green-700 mt-2">12 luni consecutive</div>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-green-100 border border-green-200">
                  <p className="text-xs text-green-700 italic">
                    Art. 319 și art. 427 alin. (19) din Codul vamal al RM nr. 95/2021
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Row - Calculation and Sanctions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Calculation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-800">Calcularea termenului</h3>
              </div>
              <div className="space-y-4">
                <p className="text-base text-purple-800 leading-relaxed mb-4">
                  Termenul începe să curgă de la data plasării sub regim vamal.
                </p>
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200">
                  <p className="text-sm text-purple-900 font-medium leading-relaxed">
                    <strong>Exemplu:</strong> Dacă mijlocul de transport a fost declarat prin acțiune la data de 01.01.2024, 
                    atunci în perioada de 12 luni consecutive (01.01.2024 – 31.12.2024) acest mijloc de transport 
                    se poate afla pe teritoriul vamal al RM doar 180 de zile.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sanctions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-orange-100 border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-600 shadow-lg">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-800">Sancțiuni pentru nerespectarea termenelor</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-red-100 border border-red-200">
                    <p className="text-sm text-red-900 font-medium">
                      <strong>Până la 30 de zile:</strong> Amendă de la 84 la 90 de unități convenționale (4.200 – 4.500 lei)
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-100 border border-red-200">
                    <p className="text-sm text-red-900 font-medium">
                      <strong>Mai mult de 30 de zile:</strong> Amendă de la 1.300 la 1.500 de unități convenționale (65.000 – 75.000 lei)
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-red-100 border border-red-200">
                  <p className="text-xs text-red-700 italic">
                    Art. 287 alin. (8) din Codul Contravențional al Republicii Moldova nr. 218/2008
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Third Row - Conditions and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Conditions */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-100 border border-indigo-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-indigo-800">Condiții pentru admitere temporară</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-indigo-100">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-bold">1</div>
                    <span className="text-sm text-indigo-800">Mărfurile nu suferă nicio modificare (doar uzura normală)</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-indigo-100">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-bold">2</div>
                    <span className="text-sm text-indigo-800">Este posibilă asigurarea identificării mărfurilor</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-indigo-100">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-bold">3</div>
                    <span className="text-sm text-indigo-800">Titularul regimului este stabilit în afara teritoriului vamal</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-indigo-100">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-bold">4</div>
                    <span className="text-sm text-indigo-800">Sunt îndeplinite cerințele pentru scutirea de drepturi de import</span>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-indigo-100 border border-indigo-200">
                  <p className="text-xs text-indigo-700 italic">
                    Art. 318 alin. (2) și art. 318¹ din Codul vamal al RM nr. 95/2021
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800">Contact pentru informații</h3>
              </div>
              <div className="space-y-4">
                <p className="text-base text-emerald-800 leading-relaxed mb-4">
                  Pentru neclarități sau întrebări cu privire la legislația vamală:
                </p>
                <div className="text-center p-6 rounded-xl bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200">
                  <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">+373 22 78-88-88</div>
                  <div className="text-lg font-semibold text-emerald-800 mb-2">Centrul Unic de Apel</div>
                  <div className="text-sm text-emerald-700">Serviciul Vamal al Republicii Moldova</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-8"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-100 to-gray-100 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500 shadow-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">Notă importantă</h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong className="font-semibold">Această aplicație este doar pentru demonstrație.</strong> Pentru informații oficiale și actualizate, 
              consultați Serviciul Vamal al Republicii Moldova sau contactați Centrul Unic de Apel la numărul de telefon indicat mai sus.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
// Shared style utilities to reduce duplication across components

export const gradientPatterns = {
  // Header gradients
  blueHeader: 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700',
  slateHeader: 'bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800',
  
  // Card gradients
  blueCard: 'bg-gradient-to-br from-blue-50 to-blue-100',
  greenCard: 'bg-gradient-to-br from-green-50 to-emerald-100',
  purpleCard: 'bg-gradient-to-br from-purple-50 to-indigo-100',
  orangeCard: 'bg-gradient-to-br from-orange-50 to-yellow-100',
  redCard: 'bg-gradient-to-br from-red-50 to-orange-100',
  indigoCard: 'bg-gradient-to-br from-indigo-50 to-blue-100',
  emeraldCard: 'bg-gradient-to-br from-emerald-50 to-green-100',
  
  // Border colors
  blueBorder: 'border-blue-200/50',
  greenBorder: 'border-green-200/50',
  purpleBorder: 'border-purple-200/50',
  orangeBorder: 'border-orange-200/50',
  redBorder: 'border-red-200/50',
  indigoBorder: 'border-indigo-200/50',
  emeraldBorder: 'border-emerald-200/50',
  
  // Icon backgrounds
  blueIcon: 'bg-gradient-to-br from-blue-500 to-blue-600',
  greenIcon: 'bg-gradient-to-br from-green-500 to-emerald-600',
  purpleIcon: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  orangeIcon: 'bg-gradient-to-br from-orange-500 to-yellow-600',
  redIcon: 'bg-gradient-to-br from-red-500 to-orange-500',
  indigoIcon: 'bg-gradient-to-br from-indigo-500 to-blue-600',
  emeraldIcon: 'bg-gradient-to-br from-emerald-500 to-green-600',
}

export const animationPatterns = {
  // Common motion variants
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  
  staggerChildren: {
    staggerChildren: 0.1
  }
}

export const cardStyles = {
  base: 'group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300',
  hoverOverlay: 'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  content: 'relative p-6 sm:p-8',
  iconContainer: 'flex h-12 w-12 items-center justify-center rounded-xl shadow-lg',
  title: 'text-xl font-bold',
  subtitle: 'text-sm font-medium',
}

export const responsiveClasses = {
  container: 'container mx-auto px-4 sm:px-6 lg:px-8',
  grid: 'grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8',
  gridThree: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6',
  gridFour: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6',
  text: {
    heading: 'text-xl sm:text-2xl font-bold tracking-tight',
    subheading: 'text-lg font-semibold',
    body: 'text-base leading-relaxed',
    small: 'text-sm',
    tiny: 'text-xs'
  }
}

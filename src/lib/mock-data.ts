import { VehicleRecord, VerificationResponse } from '@/types'

// Countries for random generation
const countries = ['România', 'Ucraina', 'Germania', 'Italia', 'Polonia', 'Franța', 'Bulgaria', 'Ungaria', 'Slovacia', 'Cehia']

// Generate random vehicle data
export function generateRandomVehicleReport(plateNumber: string): VerificationResponse {
  const now = new Date()
  const currentYear = now.getFullYear()
  
  // Random days used (0-180)
  const daysUsed = Math.floor(Math.random() * 181)
  const daysRemaining = Math.max(0, 180 - daysUsed)
  
  // Random country
  const country = countries[Math.floor(Math.random() * countries.length)]
  
  // Counting period: January 1st to December 31st of current year
  const countingPeriodStart = new Date(currentYear, 0, 1) // January 1st
  const countingPeriodEnd = new Date(currentYear, 11, 31) // December 31st
  
  // Random first entry date within the current year (when counting started)
  const daysSinceYearStart = Math.floor(Math.random() * 365)
  const firstEntry = new Date(countingPeriodStart.getTime() + daysSinceYearStart * 24 * 60 * 60 * 1000)
  
  // Random last entry date (could be same as first entry or later)
  const daysSinceFirstEntry = Math.floor(Math.random() * Math.max(1, 365 - daysSinceYearStart))
  const lastEntry = new Date(firstEntry.getTime() + daysSinceFirstEntry * 24 * 60 * 60 * 1000)
  
  // Determine status first
  let status: VerificationResponse['status'] = 'valid'
  const warnings: string[] = []
  
  // Random chance for not found (5% chance) - check this first
  if (Math.random() < 0.05) {
    status = 'not_found'
    warnings.push('Autovehiculul nu a fost găsit în înregistrările noastre')
  } else if (Math.random() < 0.1) {
    // Random chance for expired status (10% chance)
    status = 'expired'
    warnings.push('Autovehiculul a ieșit deja din Moldova')
  } else if (daysRemaining === 0) {
    status = 'limit_reached'
    warnings.push('Ați atins limita de 180 zile pentru acest an')
  } else if (daysRemaining <= 30) {
    warnings.push(`Mai aveți doar ${daysRemaining} zile rămase`)
  } else if (daysRemaining <= 60) {
    warnings.push(`Aveți ${daysRemaining} zile rămase`)
  }
  
  return {
    plateNumber: plateNumber.toUpperCase(),
    daysRemaining,
    daysUsed,
    limitReached: daysRemaining === 0,
    firstEntry,
    lastEntry,
    countingPeriodStart,
    countingPeriodEnd,
    warnings,
    status
  }
}

export function findVehicleByPlate(plateNumber: string): VehicleRecord | undefined {
  // Always return undefined to trigger random generation
  return undefined
}


export function simulateApiDelay(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))
}
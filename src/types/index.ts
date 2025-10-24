export interface VehicleRecord {
  plateNumber: string
  country: string
  entryDate: Date
  exitDate?: Date
  daysUsed: number
  daysRemaining: number
  isActive: boolean
}

export interface VerificationResponse {
  plateNumber: string
  daysRemaining: number
  daysUsed: number
  limitReached: boolean
  lastEntry?: Date
  firstEntry?: Date
  countingPeriodStart: Date
  countingPeriodEnd: Date
  warnings: string[]
  status: 'valid' | 'expired' | 'limit_reached' | 'not_found'
}

export interface PlateInputProps {
  onSubmit: (plateNumber: string) => void
  loading?: boolean
}

export interface VerificationResultProps {
  result: VerificationResponse
  onNewSearch: () => void
}
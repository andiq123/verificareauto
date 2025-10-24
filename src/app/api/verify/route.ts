import { NextRequest, NextResponse } from 'next/server'
import { generateRandomVehicleReport, simulateApiDelay } from '@/lib/mock-data'
import { validatePlateNumber, formatPlateNumber } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const { plateNumber } = await request.json()
    
    if (!plateNumber || typeof plateNumber !== 'string') {
      return NextResponse.json(
        { error: 'Numărul de înmatriculare este obligatoriu' },
        { status: 400 }
      )
    }
    
    const formattedPlate = formatPlateNumber(plateNumber)
    
    if (!validatePlateNumber(formattedPlate)) {
      return NextResponse.json(
        { error: 'Vă rugăm să introduceți un număr de înmatriculare valid' },
        { status: 400 }
      )
    }
    
    // Simulate API delay
    await simulateApiDelay()
    
    // Generate random report for any plate number
    const result = generateRandomVehicleReport(formattedPlate)
    
    return NextResponse.json(result)
    
  } catch (error) {
    console.error('API Error:', error)
      return NextResponse.json(
        { error: 'Eroare internă a serverului' },
        { status: 500 }
      )
  }
}
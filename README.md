# Moldova Vehicle Verification Service

A modern, simple, and efficient web service that allows users to check how many days their foreign-registered vehicle can stay in the Republic of Moldova.

## 🚗 Features

- **License Plate Verification**: Enter any international license plate number
- **180-Day Limit Tracking**: Automatically calculates remaining days based on Moldova's foreign vehicle regulations
- **Real-time Status**: Instant verification with detailed status information
- **Modern UI**: Clean, responsive design with mobile-first approach
- **Mock Backend**: Simulated API for demonstration purposes

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components with Radix UI primitives
- **TypeScript**: Full type safety throughout the application
- **Icons**: Lucide React for modern iconography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd carVerification/car-verification
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Usage

1. **Enter License Plate**: Type your vehicle's license plate number (e.g., AB123CD)
2. **Submit**: Click "Check Status" to verify your vehicle
3. **View Results**: See days used, days remaining, and any warnings
4. **Check Another**: Use "Check Another Vehicle" to verify additional vehicles

## 🎯 Mock Data

The service includes sample vehicles for testing:

- **AB123CD** (Romania) - 45 days used, 135 remaining
- **XY789ZZ** (Ukraine) - 14 days used, 166 remaining (exited)
- **DE456FG** (Germany) - 180 days used, 0 remaining (limit reached)
- **IT999XX** (Italy) - 120 days used, 60 remaining

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/verify/     # API endpoint for vehicle verification
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main application page
│   └── globals.css     # Global styles and design system
├── components/
│   ├── ui/             # Reusable UI components
│   ├── PlateInput.tsx  # License plate input form
│   └── VerificationResult.tsx # Results display component
├── lib/
│   ├── utils.ts        # Utility functions
│   └── mock-data.ts    # Mock database and API logic
└── types/
    └── index.ts        # TypeScript type definitions
```

## 🎨 Design System

The application uses a modern design system with:

- **Colors**: Blue primary palette with semantic color tokens
- **Typography**: Geist font family for clean readability
- **Components**: Consistent spacing, borders, and shadows
- **Responsive**: Mobile-first design with breakpoint optimization

## 🔧 API Endpoints

### POST /api/verify

Verifies a vehicle's status in Moldova.

**Request:**
```json
{
  "plateNumber": "AB123CD"
}
```

**Response:**
```json
{
  "plateNumber": "AB123CD",
  "daysRemaining": 135,
  "daysUsed": 45,
  "limitReached": false,
  "lastEntry": "2024-01-15T00:00:00.000Z",
  "warnings": [],
  "status": "valid"
}
```

## 📋 Status Types

- **valid**: Vehicle is compliant with regulations
- **limit_reached**: 180-day limit has been reached
- **expired**: Vehicle has already exited Moldova
- **not_found**: Vehicle not found in records

## 🚀 Deployment

The application is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Docker** containers

## 📝 License

This project is for demonstration purposes only.

## 🤝 Contributing

This is a proof-of-concept project. For production use, consider:

- Real database integration
- User authentication
- Payment processing
- Government API integration
- Enhanced security measures
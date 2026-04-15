import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: { default: 'SuperJourneys — AI Travel Planner', template: '%s | SuperJourneys' },
  description: 'Turning your imagination into itineraries, powered by real travel intelligence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
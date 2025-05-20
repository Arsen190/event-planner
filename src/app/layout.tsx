// src/app/layout.tsx
import './globals.css'
import { Navbar } from '@/components/ui/Navbar'

export const metadata = {
  title: 'Планировщик событий',
  description: 'Личное приложение для управления событиями',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

import { TopBar } from '@/components/Topbar/TopBar'
import type { Metadata } from 'next'
import '@/assets/styles/index.scss'
import SettingsContextProvider from '@/components/context/SettingsContext'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <SettingsContextProvider>
          <TopBar />
          {children}
        </SettingsContextProvider>
      </body>
    </html>
  )
}

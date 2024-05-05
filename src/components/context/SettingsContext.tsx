'use client'

import { NextFont } from 'next/dist/compiled/@next/font'
import localFont from 'next/font/local'
import { createContext, useContext, useEffect, useState } from 'react'

interface Context {
  toggled: boolean
  font: string
  toggleTheme: () => void
  changeFont: (name: string) => void
}

const sansSerif = localFont({
  src: [
    {
      path: '../../../public/fonts/Inter-VariableFont_slnt,wght.ttf',
      weight: '400'
    },
    {
      path: '../../../public/fonts/Inter-Bold.ttf',
      weight: '700'
    }
  ]
})

const serif = localFont({
  src: [
    {
      path: '../../../public/fonts/Lora-VariableFont_wght.ttf',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/Lora-Italic-VariableFont_wght.ttf',
      style: 'italic'
    }
  ]
})

const mono = localFont({
  src: '../../../public/fonts/Inconsolata-VariableFont_wdth,wght.ttf'
})

const fonts: { [key: string]: NextFont } = {
  'sans serif': sansSerif,
  serif: serif,
  mono: mono
}

export const SettingsContext = createContext<Context | null>(null)

interface Props {
  children: React.ReactNode
}

export default function SettingsContextProvider({ children }: Props) {
  const [toggled, setToggled] = useState<boolean>(false)
  const [settings, setSettings] = useState({ mode: '', font: 'sans serif' })

  useEffect(() => {
    const { mode } = JSON.parse(localStorage.getItem('settings') || '""')

    const hasDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

    if (mode) {
      document.documentElement.className = mode
      setToggled(mode === 'dark' ? true : false)
      return
    }

    if (mode === 'light') return

    if (mode === 'dark') return setToggled(true)

    if (hasDarkMode) return setToggled(true)
  }, [])

  useEffect(() => {
    const { font } = JSON.parse(localStorage.getItem('settings') || '""')
    if (!font) return
    setSettings((prev) => ({ ...prev, font }))
  }, [])

  const toggleTheme = (): void => {
    const mode = toggled ? 'light' : 'dark'
    document.documentElement.className = mode
    localStorage.setItem('settings', JSON.stringify({ mode, font: settings.font }))
    setToggled(!toggled)
  }

  const changeFont = (name: string): void => {
    setSettings((prev) => ({ ...prev, font: name }))
    localStorage.setItem('settings', JSON.stringify({ font: name, mode: settings.mode }))
  }

  return (
    <SettingsContext.Provider value={{ toggled, toggleTheme, font: settings.font, changeFont }}>
      <div className={fonts[settings.font].className}>{children}</div>
    </SettingsContext.Provider>
  )
}

export const useSettingsContext = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsContextProvider')
  }
  return context
}
